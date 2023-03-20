import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Prueba() {
    return(
        <div>HOLa</div>
    );
    /* const [preguntas, setPreguntas] = useState([]);
    const [loading, setLoading] = useState(true);
    axios.get(`/apiRest/post.php?categoria=programacion`)
        .then(response => {
            setPreguntas(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        });
    useEffect(() => {
        console.log(preguntas[0].titulo_pregunta);
    }, []);
    if (loading) {
        return;
    } else {

        console.log(preguntas[0].titulo_pregunta + "En el else");
        return (
            <div>
                {<p>{preguntas[0].titulo_pregunta}</p>}
            </div>
        );
        console.log(preguntas);
    } */
}

export default Prueba;