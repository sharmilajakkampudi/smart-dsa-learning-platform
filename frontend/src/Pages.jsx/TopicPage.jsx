import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { topics } from "../Data/questions";

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8080";

function TopicPage() {
    const navigate = useNavigate();
    const { topicName } = useParams();

    const student = JSON.parse(
        localStorage.getItem("student") || "null"
    );

    const studentId = student?.id;

    const selectedTopic = topics.find(
        topic => topic.slug === topicName
    );

    const [topicQuestions, setTopicQuestions] = useState([]);
    const [solvedQuestions, setSolvedQuestions] = useState([]);
    const [search, setSearch] = useState("");
    const [difficultyFilter, setDifficultyFilter] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Load questions from the Spring Boot backend
    useEffect(() => {
        if (!selectedTopic) {
            setTopicQuestions([]);
            setLoading(false);
            return;
        }

        let cancelled = false;

        setLoading(true);
        setError("");

        fetch(
            `${API_URL}/api/questions?topic=${encodeURIComponent(
                selectedTopic.name
            )}`
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `Server returned status ${response.status}`
                    );
                }

                return response.json();
            })
            .then(data => {
                if (!cancelled) {
                    setTopicQuestions(
                        Array.isArray(data) ? data : []
                    );
                }
            })
            .catch(error => {
                if (!cancelled) {
                    console.error("Error loading questions:", error);

                    setError(
                        "Unable to load questions. Check the backend and browser console."
                    );

                    setTopicQuestions([]);
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [topicName, selectedTopic]);

    // Restore progress for the selected topic
    useEffect(() => {
        if (!studentId || !selectedTopic) {
            setSolvedQuestions([]);
            return;
        }

        let cancelled = false;

        setSolvedQuestions([]);

        fetch(
            `${API_URL}/api/progress?topic=${encodeURIComponent(
                selectedTopic.name
            )}`,
            {
                credentials: "include"
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load progress");
                }

                return response.json();
            })
            .then(data => {
                if (!cancelled) {
                    setSolvedQuestions(
                        Array.isArray(data) ? data : []
                    );
                }
            })
            .catch(error => {
                if (!cancelled) {
                    console.error("Error loading progress:", error);
                    setSolvedQuestions([]);
                }
            });

        setSearch("");
        setDifficultyFilter("All");

        return () => {
            cancelled = true;
        };
    }, [studentId, topicName]);

    // Update and save checkbox progress
    async function handleCount(questionName, checked) {
        if (!studentId) {
            alert("Please log in again.");
            return;
        }

        const url =
            `${API_URL}/api/progress?topic=${encodeURIComponent(
                selectedTopic.name
            )}` +
            `&questionName=${encodeURIComponent(questionName)}`;

        try {
            let response;

            if (checked) {
                response = await fetch(
                    `${API_URL}/api/progress`,
                    {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            topic: selectedTopic.name,
                            questionName
                        })
                    }
                );
            } else {
                response = await fetch(url, {
                    method: "DELETE",
                    credentials: "include"
                });
            }

            if (!response.ok) {
                throw new Error("Could not save progress");
            }

            setSolvedQuestions(previous =>
                checked
                    ? previous.includes(questionName)
                        ? previous
                        : [...previous, questionName]
                    : previous.filter(name => name !== questionName)
            );
        } catch (error) {
            console.error("Error saving progress:", error);

            alert(
                "Unable to save progress. Please check the backend."
            );
        }
    }

    // Apply search and difficulty filters
    const filteredQuestions = topicQuestions.filter(question => {
        const matchesSearch = question.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesDifficulty =
            difficultyFilter === "All" ||
            question.difficulty === difficultyFilter;

        return matchesSearch && matchesDifficulty;
    });

    // Handle invalid topic URLs
    if (!selectedTopic) {
        return (
            <div className="array-page">
                <button
                    className="home-button"
                    onClick={() => navigate("/")}
                >
                    ← Home
                </button>

                <h2>Topic not found</h2>
                <p>Please return home and select a valid topic.</p>
            </div>
        );
    }

    const solvedCount = topicQuestions.filter(question =>
        solvedQuestions.includes(question.name)
    ).length;

    return (
        <div className="array-page">
            <button
                className="home-button"
                onClick={() => navigate("/")}
            >
                ← Home
            </button>

            <div className="array-header">
                <div>
                    <h2>{selectedTopic.name}</h2>

                    <p className="topic-description">
                        Practise consistently and track your progress.
                    </p>
                </div>

                <div className="solved-progress">
                    <span className="solved-number">
                        {solvedCount}
                    </span>

                    <span> / {topicQuestions.length} Solved</span>
                </div>
            </div>

            <div className="filter-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search questions..."
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />

                <select
                    className="difficulty-select"
                    value={difficultyFilter}
                    onChange={event =>
                        setDifficultyFilter(event.target.value)
                    }
                >
                    <option value="All">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div className="question-table">
                <div className="question-header">
                    <div>Status</div>
                    <div>Problem</div>
                    <div>Difficulty</div>
                    <div>Link</div>
                </div>

                {loading ? (
                    <div className="no-questions">
                        Loading questions...
                    </div>
                ) : error ? (
                    <div className="no-questions">
                        {error}
                    </div>
                ) : filteredQuestions.length > 0 ? (
                    filteredQuestions.map(question => (
                        <div
                            className="question-row"
                            key={question.name}
                        >
                            <div className="check-box">
                                <input
                                    type="checkbox"
                                    checked={solvedQuestions.includes(
                                        question.name
                                    )}
                                    onChange={event =>
                                        handleCount(
                                            question.name,
                                            event.target.checked
                                        )
                                    }
                                    aria-label={`Mark ${question.name} as solved`}
                                />
                            </div>

                            <div
                                className={`question-name ${
                                    solvedQuestions.includes(question.name)
                                        ? "completed-question"
                                        : ""
                                }`}
                            >
                                {question.name}
                            </div>

                            <div>
                                <span
                                    className={`difficulty-badge ${question.difficulty.toLowerCase()}`}
                                >
                                    {question.difficulty}
                                </span>
                            </div>

                            <div>
                                <a
                                    className="practice-link"
                                    href={question.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Practice ↗
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-questions">
                        No questions found. Try another search or difficulty.
                    </div>
                )}
            </div>

            <p className="question-total">
                Showing {filteredQuestions.length} of{" "}
                {topicQuestions.length} questions
            </p>
        </div>
    );
}

export default TopicPage;
