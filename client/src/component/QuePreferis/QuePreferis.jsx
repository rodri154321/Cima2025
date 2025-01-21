import React, { useState } from 'react';
import axios from 'axios'; // Importar Axios
import style from './QuePreferis.module.css';

const Game = () => {
    const questions = [
        {
            question: "Devocionales",
            upText: "Mañana",
            downText: "Noche",
            upImage: "https://images.pexels.com/photos/1335115/pexels-photo-1335115.jpeg",
            downImage: "https://i.ytimg.com/vi/WB3xM4tsi58/maxresdefault.jpg",
        },
        {
            question: "Mate",
            upText: "Dulce",
            downText: "Amargo",
            upImage: "https://1.bp.blogspot.com/-Yw1gTTGj9Js/YPHCCvmV4BI/AAAAAAAATJo/nWO7PGgiayIZzwgIh6vrv18UOgYB60dPACLcBGAsYHQ/w587-h391/mate-de-leite.jpg",
            downImage: "https://i0.wp.com/thehappening.com/wp-content/uploads/2022/06/mate.png",
        },
        {
            question: "Biblia",
            upText: "NTV",
            downText: "Reina Valera",
            upImage: "/BibliaNTV.png",
            downImage: "/BibliaRV.png",
        },
        {
            question: "Clima",
            upText: "Calor",
            downText: "Frio",
            upImage: "https://www.fundacionaquae.org/wp-content/uploads/2022/06/ola-calor-e1655468527426.jpg",
            downImage: "https://content.skyscnr.com/m/6f46bfbe0cb0b1f1/original/GettyImages-466891972.jpg",
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [inputValues, setInputValues] = useState({ answer1: "", answer2: "" });
    const [quizCompleted, setQuizCompleted] = useState(false); // Nuevo estado para verificar si el quiz ha terminado

    const currentQuestion = questions[currentQuestionIndex];

    const handleChoice = (choice) => {
        setSelected(choice);

        // Enviar la respuesta seleccionada a Airtable
        const answer = {
            answer: choice === 'up' ? currentQuestion.upText : currentQuestion.downText,
            index: currentQuestionIndex + 1 // Enviar el índice de la pregunta, 1 basado
        };

        sendAnswerToAirtable(answer);

        setTimeout(() => {
            if (currentQuestionIndex === questions.length - 1) {
                setQuizCompleted(true); // Marcar el quiz como completado
            } else {
                setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
            }
            setSelected(null);
        }, 1000);
    };

    const sendAnswerToAirtable = async (answer) => {
        const airtableUrl = 'https://api.airtable.com/v0/appyIJMmxzYH2EZuM/Table1';
        const apiKey = 'patGbEFBkHN0YFJv2.ca6883e4378f4dcf9f9a6d41cf7e831746d915c4ad94e7fb6935c98fa76b0d8c';

        try {
            await axios.post(airtableUrl, {
                fields: {
                    Name: answer.answer,  // La respuesta actual
                    Dia: 2,  // Valor fijo para el campo dia
                    ID: answer.index  // El índice de la pregunta
                }
            }, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {

        // Enviar las respuestas en 2 fetch distintos
        axios.post('https://api.airtable.com/v0/appyIJMmxzYH2EZuM/Table1', {
            fields: {
                Name: `Respuesta 1: ${inputValues.answer1}`,
                Dia: 2,
                ID: "Final"
            }
        }, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        axios.post('https://api.airtable.com/v0/appyIJMmxzYH2EZuM/Table1', {
            fields: {
                Name: `Respuesta 2: ${inputValues.answer2}`,
                Dia: 2,
                ID: "Final"
            }
        }, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <div className={style.gameContainer}>
            <h1>¿Qué preferís?</h1>

            {!quizCompleted ? (
                <>
                    <div
                        className={`${style.option} ${style.optionUp}`}
                        onClick={() => handleChoice('up')}
                    >
                        <img src={currentQuestion.upImage} alt="up" />
                        <div className={`${style.textOverlay} ${selected === 'up' ? style.selected : ''}`}>
                            {currentQuestion.upText}
                        </div>
                    </div>

                    <div className={style.circleText}>
                        <p>{currentQuestion.question}</p>
                    </div>

                    <div
                        className={`${style.option} ${style.optionDown}`}
                        onClick={() => handleChoice('down')}
                    >
                        <img src={currentQuestion.downImage} alt="down" />
                        <div className={`${style.textOverlay} ${selected === 'down' ? style.selected : ''}`}>
                            {currentQuestion.downText}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={style.inputContainer}>
                        <label>¿Qué orador invitarías una tarde de café/té/mate?</label>
                        <input
                            type="text"
                            name="answer1"
                            value={inputValues.answer1}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label>¿Qué orador invitarías una tarde de café/té/mate?</label>
                        <input
                            type="text"
                            name="answer2"
                            value={inputValues.answer2}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button onClick={handleSubmit} disabled={!inputValues.answer1 || !inputValues.answer2}>
                        Enviar
                    </button>
                </>
            )}
        </div>
    );
};

export default Game;
