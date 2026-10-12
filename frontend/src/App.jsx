import "./App.css";

import {
    Routes,
    Route,
    Navigate,
    useNavigate,
    useLocation
} from "react-router-dom";

import { useEffect, useState } from "react";

import Topics from "./Pages.jsx/Topics";
import TopicPage from "./Pages.jsx/TopicPage";
import Signup from "./Pages.jsx/Signup";
import Login from "./Pages.jsx/Login";

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8080";

// All 11 topics in the platform
const topicNames = [
    "Arrays",
    "Strings",
    "Bit Manipulation",
    "LinkedList",
    "Stacks",
    "Queues",
    "Searching and Sorting",
    "Recursion",
    "BackTracking",
    "Trees",
    "Dynamic Programming"
];

const QUESTIONS_PER_TOPIC = 15;
const TOTAL_QUESTIONS = topicNames.length * QUESTIONS_PER_TOPIC;

function ProtectedRoute({ children }) {
    const student = localStorage.getItem("student");

    if (!student) {
        return <Navigate to="/" replace />;
    }

    return children;
}

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    const [progress, setProgress] = useState([]);
    const [loadingProgress, setLoadingProgress] = useState(true);
    const [progressError, setProgressError] = useState("");

    const student = localStorage.getItem("student");
    let studentData = null;

    try {
        studentData = JSON.parse(student || "null");
    } catch {
        studentData = null;
    }

    // Fetch progress whenever the student or current route changes
    useEffect(() => {
        if (!studentData?.id) {
            setProgress([]);
            setLoadingProgress(false);
            return;
        }

        async function fetchProgress() {
            setLoadingProgress(true);
            setProgressError("");

            try {
                const response = await fetch(
                    `${API_URL}/api/progress/all`,
                    {
                        credentials: "include"
                    }
                );

                // Session expired
                if (response.status === 401) {
                    localStorage.removeItem("student");
                    setProgress([]);
                    navigate("/", { replace: true });
                    return;
                }

                if (!response.ok) {
                    throw new Error("Could not load progress.");
                }

                const data = await response.json();

                setProgress(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Progress loading error:", error);

                setProgressError(
                    "Unable to load progress. Please check your backend."
                );
            } finally {
                setLoadingProgress(false);
            }
        }

        fetchProgress();
    }, [studentData?.id, location.pathname]);

    // Count unique completed questions for each topic
    function getCompletedCount(topicName) {
        const completedQuestions = new Set(
            progress
                .filter(item => item.topic === topicName)
                .map(item => item.questionName)
        );

        return Math.min(
            completedQuestions.size,
            QUESTIONS_PER_TOPIC
        );
    }

    // Count unique completed questions across all topics
    const totalCompleted = Math.min(
        new Set(
            progress
                .filter(item => item.topic && item.questionName)
                .map(item => `${item.topic}::${item.questionName}`)
        ).size,
        TOTAL_QUESTIONS
    );

    const overallPercentage = Math.round(
        (totalCompleted / TOTAL_QUESTIONS) * 100
    );

    async function handleLogout() {
        try {
            await fetch(`${API_URL}/api/auth/logout`, {
                method: "POST",
                credentials: "include"
            });
        } catch (error) {
            console.error("Logout error:", error);
        }

        localStorage.removeItem("student");
        setProgress([]);
        navigate("/", { replace: true });
    }

    return (
        <div className="main-body">
            <Routes>
                <Route
                    path="/"
                    element={
                        student ? (
                            <Navigate to="/home" replace />
                        ) : (
                            <Login />
                        )
                    }
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <>
                                <button
                                    className="logout-button"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </
