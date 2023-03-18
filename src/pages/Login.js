import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';
import Navbar from '../Componentes/Navbar';
import React, { useState } from 'react';
import axios from 'axios';
function Login() {
    const [credenciales, setCredenciales] = useState({
        email: '',
        password: '',
    });
    const [credencialesErrors, setCredencialesErrors] = useState({
        email: '',
        password: '',
        login: '',
    });

    const [loginCorrecto, setLoginCorrecto] = useState(false);
    const [idUsuario, setIdUsuario] = useState(0);

    const userExists = event => {
        return new Promise((resolve, reject) => {
            axios.get(`/apiRest/post.php?email=${credenciales.email}&password=${credenciales.password}`)
                .then(response => {
                    console.log(response.data.exists + "26"); // Aquí puedes ver la respuesta del servidor
                    resolve(response.data.exists);
                })
                .catch(error => {
                    console.log(error); // Si ocurre algún error, puedes verlo aquí
                    reject(error);
                });
        });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        // Validación de campos
        let errors = {};
        //Email
        if (!credenciales.email.trim()) {
            errors.email = 'El correo electrónico es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(credenciales.email)) {
            errors.email = 'Introduce un correo';
        }

        try {
            const exists = await userExists(credenciales.email);
            if (exists.length > 0) {
                console.log("EXISTE");
                setIdUsuario(exists);

            } else {
                console.log("DICE QUE NO EXISTE");
                errors = { ...errors, login: '¡Email o contraseña incorrectos!' };
            }

            console.log(errors.email);
            //Password
            if (!credenciales.password.trim()) {
                errors.password = 'Introduce una contraseña';
            }
            console.log(errors);
            setCredencialesErrors(errors);

            // Si hay errores, no se envía la solicitud
            if (Object.keys(errors).length !== 0) {
                return;
            } else {
                setLoginCorrecto(true);
            }

        } catch (error) {
            console.log("Ocurrió un error: " + error);
        }
    }



    const handleInputChange = event => {
        event.persist();
        setCredenciales(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
        console.log(credenciales.email);
        console.log(credenciales.password);
    };

    return (
        <div className="loginContainer">
            <header>
                <Header></Header>
            </header>
            <main className="mainDificultad">
                <section className=''>
                    {loginCorrecto ? (
                        window.location.href = '/categorias/'+idUsuario
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={credenciales.email}
                                    onChange={handleInputChange} />
                                {credencialesErrors.email && <p>{credencialesErrors.email}</p>}
                            </div>
                            <br></br>
                            <div>
                                <label>
                                    Contraseña:
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    value={credenciales.password}
                                    onChange={handleInputChange} />
                                {credencialesErrors.password && <p>{credencialesErrors.password}</p>}
                            </div>
                            {credencialesErrors.login && <p>{credencialesErrors.login}</p>}
                            <button type="submit">Iniciar sesión</button>
                        </form>
                    )}
                </section>
            </main>
            <Navbar></Navbar>
            <footer>
                <Footer></Footer>
            </footer>
        </div>

    );

} export default Login;
