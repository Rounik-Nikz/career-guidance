import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../styles/Result.css";

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userAnswers, questions } = location.state || { userAnswers: [], questions: [] };

    if (!userAnswers || userAnswers.length === 0) {
        return <div className="result-container"><h2>No Quiz Data Found</h2></div>;
    }

    const categories = ["Cybersecurity", "Software Development", "AI", "Data Analysis", "Web Development"];
    const scores = { Cybersecurity: 0, "Software Development": 0, AI: 0, "Data Analysis": 0, "Web Development": 0 };
    const totalPerCategory = { Cybersecurity: 0, "Software Development": 0, AI: 0, "Data Analysis": 0, "Web Development": 0 };

    // Count correct answers per category
    questions.forEach((q, index) => {
        totalPerCategory[q.category]++;
        if (userAnswers[index] === q.correct) {
            scores[q.category]++;
        }
    });

    // Add "No Answers" category if some categories were not attempted
    const unansweredCategories = categories.filter(cat => totalPerCategory[cat] === 0);
    unansweredCategories.forEach(cat => {
        scores[cat] = 0;
        totalPerCategory[cat] = 6; // Default value to show a bar
    });

    // Chart Data
    const chartData = {
        labels: [...categories, ...unansweredCategories],
        datasets: [
            {
                label: "Correct Answers",
                data: categories.map(category => scores[category]),
                backgroundColor: [
                    "#4CAF50",  // Green
                    "#1E88E5",  // Blue
                    "#FF9800",  // Orange
                    "#9C27B0",  // Purple
                    "#E91E63",  // Pink
                ],
                borderRadius: 10,
            },
            {
                label: "Unanswered",
                data: categories.map(category => totalPerCategory[category] - scores[category]),
                backgroundColor: "rgba(255, 255, 255, 0.3)", // Light gray for unanswered
                borderRadius: 10,
            },
        ],
    };

    // Chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "#fff",
                    font: { weight: "bold" },
                },
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (context) => ` ${context.raw} answers`,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#fff",
                    font: { weight: "bold" },
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1, // Fix decimal issue
                    color: "#fff",
                },
            },
        },
    };

    return (
        <div className="result-container">
            <h2>Your Quiz Performance</h2>
            <div className="chart-container">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <div className="score-summary">
                {categories.map(category => (
                    <div key={category} className="score-box">
                        <span className="category-name">{category}:</span>
                        <span className="score">
                            {scores[category]} / {totalPerCategory[category]}
                        </span>
                    </div>
                ))}
            </div>
            <button className="retry-btn" onClick={() => navigate("/")}>Try Again</button>
        </div>
    );
};

export default Result;
