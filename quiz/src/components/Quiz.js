import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Quiz.css";
import allQuestions from "../data/questions"


const getRandomQuestions = (num = 20) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState(Array(20).fill(null));
    const navigate = useNavigate();

    useEffect(() => {
        const selectedQuestions = getRandomQuestions(20);
        setQuestions(selectedQuestions);
    }, []);

    const handleOptionChange = (index, selectedOption) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = selectedOption;
        setUserAnswers(newAnswers);
    };

    const handleSubmit = () => {
        navigate("/result", { state: { userAnswers, questions } });
    };

    return (
        <div className="quiz-container">
            <h2>Technical Quiz</h2>
            {questions.map((q, index) => (
                <div key={index} className="question-block">
                    <p>{index + 1}. {q.question}</p>
                    <div className="options">
                        {q.options.map((option, i) => (
                            <label key={i}>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option}
                                    onChange={() => handleOptionChange(index, option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
    );
};

export default Quiz;