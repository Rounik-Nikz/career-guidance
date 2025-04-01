import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Quiz.css";

const questions = [
    // Cybersecurity (6 questions)
    { question: "What does a firewall do?", options: ["Blocks malware", "Deletes files", "Runs software", "Creates backups"], correct: "Blocks malware", category: "Cybersecurity" },
    { question: "Which of these is a strong password?", options: ["123456", "password", "P@ssw0rd!", "qwerty"], correct: "P@ssw0rd!", category: "Cybersecurity" },
    { question: "What is phishing?", options: ["A cyber attack", "A type of software", "A programming language", "An encryption method"], correct: "A cyber attack", category: "Cybersecurity" },
    { question: "What does SSL stand for?", options: ["Secure Sockets Layer", "System Security Lock", "Software Secure Login", "Safe Socket Limit"], correct: "Secure Sockets Layer", category: "Cybersecurity" },
    { question: "What is two-factor authentication?", options: ["A single password", "A security method with two steps", "An antivirus tool", "A network protocol"], correct: "A security method with two steps", category: "Cybersecurity" },
    { question: "Which protocol is used for secure web browsing?", options: ["HTTP", "FTP", "HTTPS", "TCP"], correct: "HTTPS", category: "Cybersecurity" },

    // Software Development (6 questions)
    { question: "Which language is primarily used for Android development?", options: ["Swift", "Java", "C#", "Kotlin"], correct: "Kotlin", category: "Software Development" },
    { question: "What is an API?", options: ["Application Programming Interface", "Automated Process Integration", "Advanced Protocol Interface", "Artificial Program Integration"], correct: "Application Programming Interface", category: "Software Development" },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Sequential Question Logic", "Software Query Logic", "System Quality Language"], correct: "Structured Query Language", category: "Software Development" },
    { question: "What is Git used for?", options: ["Version control", "Writing code", "Debugging", "Testing"], correct: "Version control", category: "Software Development" },
    { question: "Which framework is used for React development?", options: ["Django", "Express.js", "Redux", "Laravel"], correct: "Redux", category: "Software Development" },
    { question: "Which software methodology follows iterative development?", options: ["Waterfall", "Agile", "Spiral", "V-Model"], correct: "Agile", category: "Software Development" },

    // AI (6 questions)
    { question: "What does AI stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Innovation", "Augmented Integration"], correct: "Artificial Intelligence", category: "AI" },
    { question: "Which programming language is most used for AI?", options: ["C++", "Python", "JavaScript", "Swift"], correct: "Python", category: "AI" },
    { question: "What is Machine Learning?", options: ["A way to build robots", "A method for AI to learn from data", "A software testing method", "A type of database"], correct: "A method for AI to learn from data", category: "AI" },
    { question: "Which of these is a deep learning framework?", options: ["TensorFlow", "Bootstrap", "Spring", "Django"], correct: "TensorFlow", category: "AI" },
    { question: "What is a neural network?", options: ["A type of database", "A network of connected AI models", "A type of algorithm", "A program for making websites"], correct: "A type of algorithm", category: "AI" },
    { question: "Which company created ChatGPT?", options: ["Google", "Microsoft", "OpenAI", "Facebook"], correct: "OpenAI", category: "AI" },

    // Data Analysis (6 questions)
    { question: "What does SQL help with?", options: ["Data visualization", "Querying databases", "Web development", "Machine learning"], correct: "Querying databases", category: "Data Analysis" },
    { question: "What is a key tool for data visualization?", options: ["Pandas", "Matplotlib", "TensorFlow", "NumPy"], correct: "Matplotlib", category: "Data Analysis" },
    { question: "Which term means cleaning and organizing raw data?", options: ["Data Modeling", "Data Preprocessing", "Data Mining", "Data Collection"], correct: "Data Preprocessing", category: "Data Analysis" },
    { question: "Which software is widely used for spreadsheets?", options: ["Google Docs", "MS Excel", "Photoshop", "Slack"], correct: "MS Excel", category: "Data Analysis" },
    { question: "Which term means analyzing large datasets?", options: ["Big Data", "Small Data", "Medium Data", "Structured Data"], correct: "Big Data", category: "Data Analysis" },
    { question: "What does BI stand for?", options: ["Business Intelligence", "Big Information", "Binary Interface", "Blockchain Innovation"], correct: "Business Intelligence", category: "Data Analysis" },

    // Web Development (6 questions)
    { question: "What does HTML stand for?", options: ["Hypertext Markup Language", "High-Level Text Machine Language", "Hyper Transfer Main Language", "Hyperlink and Text Markup Language"], correct: "Hypertext Markup Language", category: "Web Development" },
    { question: "What is CSS used for?", options: ["Styling web pages", "Programming logic", "Database management", "Cloud storage"], correct: "Styling web pages", category: "Web Development" },
    { question: "Which JavaScript framework is used for front-end?", options: ["Django", "Spring Boot", "React", "Flask"], correct: "React", category: "Web Development" },
    { question: "Which of these is a CSS framework?", options: ["Bootstrap", "Node.js", "Express.js", "Laravel"], correct: "Bootstrap", category: "Web Development" },
    { question: "What is the purpose of a CDN?", options: ["Hosting images", "Accelerating website content delivery", "Managing databases", "Creating APIs"], correct: "Accelerating website content delivery", category: "Web Development" },
    { question: "Which protocol is used for web communication?", options: ["HTTP", "FTP", "SMTP", "POP3"], correct: "HTTP", category: "Web Development" }
];

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState(Array(30).fill(null));
    const navigate = useNavigate();

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
                                <input type="radio" name={`question-${index}`} value={option} onChange={() => handleOptionChange(index, option)} />
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
