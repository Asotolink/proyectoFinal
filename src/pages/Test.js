import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';
import Navbar from '../Componentes/Navbar';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Test() {

    const [currentQuestion, setCurrentQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(30);
    const [indice, setIndice] = useState(0);
    const [score, setScore] = useState(0);
    const { categoria } = useParams();
    const { id } = useParams();
    const [preguntas, setPreguntas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [finished, setFinished] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(30);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `/apiRest/post.php?categoria=${categoria}`
            );
            setPreguntas(result.data);
            setLoading(false);

        };
        fetchData();

    }, [categoria]);
    useEffect(() => {
        loadQuestion();
    }, [loading]);
    function loadQuestion() {
        if (preguntas.length > 0) {
            if (preguntas.length == indice) {
                setFinished(true);

            } else {
                // Lógica para cargar una nueva pregunta y sus opciones de respuesta
                // Se actualizan los estados de currentQuestion, options y correctAnswer
                // Generar un número aleatorio para seleccionar una pregunta del conjunto de datos

                // Generar un número aleatorio para seleccionar una pregunta del conjunto de datos

                const selectedQuestion = preguntas[indice];

                // Establecer la pregunta actual y la respuesta correcta en el estado
                setCurrentQuestion(selectedQuestion.titulo_pregunta);

                setCorrectAnswer(selectedQuestion.respuesta_correcta);

                let array = [selectedQuestion.respuesta_correcta, selectedQuestion.respuesta_incorrecta_uno, selectedQuestion.respuesta_incorrecta_dos, selectedQuestion.respuesta_incorrecta_tres];
                // Mezclar las opciones de respuesta y establecerlas en el estado
                const shuffledOptions = shuffle(array);
                setOptions(shuffledOptions);

                // Reiniciar el tiempo restante a 30 segundos
                setTimeLeft(30);
                setIndice(indice + 1);
            }
        }
    }

    function updateTimeLeft() {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }

    useEffect(() => {
        // Cuenta atrás que se ejecuta cada segundo
        const countdown = setTimeout(updateTimeLeft, 1000);

        // Limpiar el temporizador después de que se acabe el tiempo
        if (timeLeft === 0) {
            clearTimeout(countdown);
            // Lógica para cambiar a la siguiente pregunta
            console.log(preguntas);
            loadQuestion();
        }

        // Limpiar el temporizador en cada renderizado
        return () => clearTimeout(countdown);
    }, [timeLeft]);

    function handleAnswerSubmission(userAnswer) {
        if (userAnswer === correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }
        // Lógica para cambiar a la siguiente pregunta
        setTiempoRestante(30);
        loadQuestion();
    }

    function shuffle(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    useEffect(() => {
        if (finished) {
            const data = {
                id: id,
                categoria: categoria,
                puntaje: score,
            };
            axios.put('/apiRest/post.php', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [finished]);


    

  
    

    return (
        <div className='containerTest'>
            <header className='headerTest'>
                <Header></Header>
                <Navbar id={id}></Navbar>
            </header>
            <main className='mainTest'>
                {finished ? (
                    <div className='testResuelto'>
                        <p>¡Enhorabuena! Has completado el test con un total de {score} aciertos.</p>
                        <a href='/perfil' className='boton btnTests'><p>¡Accede a tu perfil!</p></a>

                    </div>
                ) : (
                    <div className='test'>
                        
                        <div className='tiempoCat'>
                            <p className='categoria'>{categoria}</p>
                            <p className='tiempoRestante'>Tiempo restante: <p className='tiempoRest'>  {timeLeft}</p></p>
                        </div>

                        <h6 className='preguntaTest'>{currentQuestion}</h6>
                        <div className='separacionTest'></div>
                        <ul className='zonaRespuestas'>
                            {options.map((option) => (
                                <li className='boton opcionesTest' key={option} onClick={() => handleAnswerSubmission(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>

        </div>
    );
}

export default Test;