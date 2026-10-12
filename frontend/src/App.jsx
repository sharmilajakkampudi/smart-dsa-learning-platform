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
                    "http://localhost:8080/api/progress/all",
                    {
                        credentials: "include"
                    }
                );

                // Session expired (for example after a backend restart):
                // clear the old login and go back to the login page
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
            await fetch("http://localhost:8080/api/auth/logout", {
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
                                </button>

                                <div className="dashboard-welcome">
                                    <h1>
                                        Smart DSA Learning Platform
                                    </h1>

                                    <h2>
                                        Hi, {studentData?.name || "Student"}! 👋
                                    </h2>

                                    <p>
                                        Welcome to your DSA learning journey!
                                    </p>
                                </div>

                                <section className="overall-progress">
                                    <h2>My Learning Progress</h2>

                                    {loadingProgress ? (
                                        <p>Loading your progress...</p>
                                    ) : (
                                        <>
                                            {progressError && (
                                                <p className="progress-error">
                                                    {progressError}
                                                </p>
                                            )}

                                            <div className="overall-progress-info">
                                                <h3>
                                                    {totalCompleted} / {TOTAL_QUESTIONS} questions completed
                                                </h3>

                                                <p>
                                                    {overallPercentage}% completed
                                                </p>
                                            </div>

                                            <div
                                                className="progress-track overall-track"
                                                role="progressbar"
                                                aria-valuenow={overallPercentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${overallPercentage}%`
                                                    }}
                                                />
                                            </div>

                                            <h3 className="topic-progress-heading">
                                                Progress by Topic
                                            </h3>

                                            <div className="topic-progress-grid">
                                                {topicNames.map(topicName => {
                                                    const completed =
                                                        getCompletedCount(topicName);

                                                    const percentage = Math.round(
                                                        (completed / QUESTIONS_PER_TOPIC) * 100
                                                    );

                                                    return (
                                                        <div
                                                            className="topic-progress-card"
                                                            key={topicName}
                                                        >
                                                            <div className="topic-progress-label">
                                                                <strong>
                                                                    {topicName}
                                                                </strong>

                                                                <span>
                                                                    {completed}/{QUESTIONS_PER_TOPIC}
                                                                </span>
                                                            </div>

                                                            <div
                                                                className="progress-track"
                                                                role="progressbar"
                                                                aria-valuenow={percentage}
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                                aria-label={`${topicName} progress`}
                                                            >
                                                                <div
                                                                    className="progress-fill"
                                                                    style={{
                                                                        width: `${percentage}%`
                                                                    }}
                                                                />
                                                            </div>

                                                            <p>
                                                                {percentage}% completed
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    )}
                                </section>

                                <Topics />
                            </>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/topic/:topicName"
                    element={
                        <ProtectedRoute>
                            <TopicPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
    );
}

export default App;