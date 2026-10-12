
import React from "react";
import { Link } from "react-router-dom";
import { topics } from "../Data/questions";

function Topics() {
    return (
        <div className="topics-page">
            <div className="page-intro">
                <h2>DSA Topics</h2>
                <p>Choose a topic and practise questions from easy to hard.</p>
            </div>

            <div className="topics-container">
                {topics.map(topic => (
                    <Link
                        to={`/topic/${topic.slug}`}
                        className="topic-card"
                        key={topic.slug}
                    >
                        <span>{topic.name}</span>
                        <span className="card-arrow">→</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Topics;
