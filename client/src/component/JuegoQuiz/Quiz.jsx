import React, { useState } from "react";
import style from "./Quiz.module.css";
import axios from 'axios';

const JuegoQuiz = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);  // Array para guardar las respuestas y los índices
    const [quizFinished, setQuizFinished] = useState(false); // Estado para controlar si el quiz ha terminado

    const questions = [
        {
            image: "/Quiz/Amigos.jpg",
            question: "¿Como se llama en tu país?",
            options: ["Amigos", "Causa", "Panas"],
        },
        {
            image: "/Quiz/Botella.jpg",
            question: "¿Como se llama en tu país?",
            options: ["Botella", "Camarañola", "Tomatodo"],
        },
        {
            image: "/Quiz/buzo.jpg",
            question: "¿Como se llama en tu país?",
            options: ["Buzo", "Polera", "Poleron"],
        },
        {
            image: "/Quiz/Colectivo.jpg",
            question: "¿Como se llama en tu país?",
            options: ["Bondi", "Bus", "La Micro"],
        },
        {
            image: "/Quiz/merienda.jpg",
            question: "¿Como se llama en tu país?",
            options: ["Merienda", "El lonche", "Picoteo"],
        },
        {
            image: "/Quiz/Niños.jpg",
            question: "¿Como se llama en tu país?",
            options: ["Chibolos", "Pibes", "Chiquillos"],
        },
        {
            image: "/Quiz/piluso.jpg",
            question: "¿Como se llama en tu país?",
            options: ["Pescador", "Piluso", "Gorro"],
        },
        {
            image: "/Quiz/palomitas.jfif",
            question: "¿Como se llama en tu país?",
            options: ["Canchitas", "Pochoclos", "Pipoca"],
        }
    ];

    const handleAnswer = async (answer) => {
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers, { answer, index: questionIndex }];  // Usar questionIndex
            sendAnswerToAirtable(newAnswers[newAnswers.length - 1]);
            return newAnswers;
        });
    };

    const sendAnswerToAirtable = async (answer) => {
        const airtableUrl = 'https://api.airtable.com/v0/appyIJMmxzYH2EZuM/Table1';
        const apiKey = 'patGbEFBkHN0YFJv2.ca6883e4378f4dcf9f9a6d41cf7e831746d915c4ad94e7fb6935c98fa76b0d8c';

        try {
            await axios.post(airtableUrl, {
                fields: {
                    Name: answer.answer,  // La respuesta actual
                    Dia: 1,  // Valor fijo para el campo dia
                    ID: answer.index  // El índice de la pregunta
                }
            }, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Error al enviar a Airtable:', error);
        }
    };

    const handleNextQuestion = () => {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            setQuizFinished(true);  // Termina el quiz
        }
    };

    return (
        <div>
            {quizFinished ? (
                <div className={style.thankYouMessage}>
                    <h2>Gracias por Contestarnos</h2>
                </div>
            ) : (
                <Quiz
                    image={questions[questionIndex].image}
                    question={questions[questionIndex].question}
                    options={questions[questionIndex].options}
                    onAnswer={handleAnswer}
                    nextQuestion={handleNextQuestion}
                    isLastQuestion={questionIndex === questions.length - 1}
                />
            )}
        </div>
    );
};

const Quiz = ({ image, question, options, onAnswer, nextQuestion, isLastQuestion }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [customAnswer, setCustomAnswer] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCustomAnswerChange = (event) => {
        setCustomAnswer(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedOption === "other" && customAnswer === "") {
            return; // No hacer nada si no hay respuesta personalizada
        } else {
            const answer = selectedOption === "other" ? customAnswer : selectedOption;
            onAnswer(answer);
            nextQuestion();
            setSelectedOption(null);
            setCustomAnswer("");
        }
    };

    return (
        <div className={style.quizContainer}>
            <div className={style.imageContainer}>
                <img src={image} alt="Pregunta" className={style.quizImage} />
            </div>
            <h1 className={style.QuestionTitle}>
                {question}
            </h1>
            <div className={style.optionsContainer}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`${style.optionCard} ${selectedOption === option ? style.selected : ""}`}
                        onClick={() => handleOptionChange({ target: { value: option } })}
                    >
                        <input
                            type="radio"
                            id={`option${index}`}
                            name="quizOption"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                        />
                        <label
                            htmlFor={`option${index}`}
                            className={`${style.optionLabel} ${selectedOption === option ? style.selected : ""}`}
                        >
                            {option}
                        </label>
                    </div>
                ))}
                <div
                    className={`${style.optionCard} ${selectedOption === "other" ? style.selected : ""}`}
                    onClick={() => handleOptionChange({ target: { value: "other" } })}
                >
                    <input
                        type="radio"
                        id="otherOption"
                        name="quizOption"
                        value="other"
                        checked={selectedOption === "other"}
                        onChange={handleOptionChange}
                    />
                    {selectedOption !== "other" && (
                        <label
                            htmlFor="otherOption"
                            className={`${style.optionLabel} ${selectedOption === "other" ? style.selected : ""}`}
                        >
                            Otro
                        </label>
                    )}
                    {selectedOption === "other" && (
                        <input
                            type="text"
                            placeholder="Especifique"
                            value={customAnswer}
                            onChange={handleCustomAnswerChange}
                            className={style.customAnswerInput}
                        />
                    )}
                </div>
            </div>
            <div className={style.submitButtonContainer}>
                <button
                    onClick={handleSubmit}
                    className={`${style.submitButton} ${(!selectedOption || (selectedOption === "other" && customAnswer === "")) ? style.disabled : ""}`}
                    disabled={!selectedOption || (selectedOption === "other" && customAnswer === "")}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default JuegoQuiz;
