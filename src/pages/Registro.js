import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Componentes/Footer';
import Header from '../Componentes/Header';
import Navbar from '../Componentes/Navbar';

function Registro() {
    const [formValues, setFormValues] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const emailExists = event => {
        return new Promise((resolve, reject) => {
            axios.get(`/apiRest/post.php?email=${formValues.email}`)
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
    // Hola3@hola

    const handleSubmit = async event => {
        event.preventDefault();
        // Validación de campos
        let errors = {};
        //Nombre
        if (!formValues.nombre.trim()) {
            errors.nombre = 'El nombre es obligatorio';
        }
        //Apellidos
        if (!formValues.apellidos.trim()) {
            errors.apellidos = 'Los apellidos son obligatorios';
        }
        //Email
        if (!formValues.email.trim()) {
            errors.email = 'El correo electrónico es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'El correo electrónico no es válido';
        }

        try {
            const exists = await emailExists(formValues.email);
            if (exists) {
                console.log("EXISTE");
                errors = { ...errors, email: 'Este correo electrónico ya está registrado' };
            } else {
                console.log("DICE QUE NO EXISTE");
            }

            console.log(errors.email);
            //Password
            if (!formValues.password.trim()) {
                errors.password = 'La contraseña es obligatoria';
            } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(formValues.password)) {
                errors.password = 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un caracter especial.';
            }
            //Confirmar Password
            if (formValues.confirmPassword !== formValues.password) {
                errors.confirmPassword = 'Las contraseñas no coinciden';
            }
            console.log(errors);
            setFormErrors(errors);

            // Si hay errores, no se envía la solicitud
            if (Object.keys(errors).length !== 0) {
                return;
            } else {
                // Eliminar la propiedad "confirmPassword" del objeto "formValues"
                const { confirmPassword, ...newFormValues } = formValues;
                // Actualizar el estado con el nuevo objeto sin la propiedad "confirmPassword"
                setFormValues(newFormValues);
                axios.defaults.headers.common['Content-Type'] = 'application/json';
                axios.post('/apiRest/post.php', newFormValues)
                    .then(response => {
                        setFormValues({
                            nombre: '',
                            apellidos: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        });
                        setFormSubmitted(true);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        } catch (error) {
            console.log("Ocurrió un error: " + error);
        }
    };
    const handleInputChange = event => {
        event.persist();
        setFormValues(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <div className="registroContainer">
            <div className='cabeceraRegistro'>
                <header>
                    <Header></Header>
                </header>
                <Navbar></Navbar>
            </div>
            <div className='bodyRegistro'>
                <main className="mainRegistro">

                    {formSubmitted ? (
                        <section className='acabado'>
                            <h4>¡Registro completado!</h4>
                            <h5 className='confirmacion'>Gracias por registrarte, inicia sesión para acceder a tu perfil</h5>
                            <a href='/perfil' className='boton btnAcabado'><p>Inicia Sesión</p></a>
                        </section>
                    ) : (
                        <section className='registroIncompleto'>
                            <p className='tituloRegistro'>Registro</p>
                            <form className='formRegistro' onSubmit={handleSubmit}>
                                <div>

                                    <label htmlFor="nombre">Nombre</label>
                                    <br></br>
                                    <input className='inputRegistro' placeholder='ej: Juan' type="text" name="nombre" value={formValues.nombre} onChange={handleInputChange} />
                                    {formErrors.nombre && <p>{formErrors.nombre}</p>}
                                </div>
                                <div>
                                    <label htmlFor="apellidos">Apellido</label>
                                    <br></br>
                                    <input className='inputRegistro' placeholder='ej: García López' type="text" name="apellidos" value={formValues.apellidos} onChange={handleInputChange} />
                                    {formErrors.apellidos && <p>{formErrors.apellidos}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email">Correo electrónico</label>
                                    <br></br>
                                    <input className='inputRegistro' placeholder='ej: example@gmail.com' type="email" name="email" value={formValues.email} onChange={handleInputChange} />
                                    {formErrors.email && <p>{formErrors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="password">Contraseña</label>
                                    <br></br>
                                    <input className='inputRegistro' type="password" name="password" placeholder='**********' value={formValues.password} onChange={handleInputChange} />
                                    {formErrors.password && <p>{formErrors.password}</p>}
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                                    <br></br>
                                    <input className='inputRegistro' type="password" placeholder='**********' name="confirmPassword" value={formValues.confirmPassword} onChange={handleInputChange} />
                                    {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
                                </div>
                                <button className='boton btnRegistro' type="submit" >Registrarse</button>
                            </form>
                            <br></br>
                            <br></br>
                            <a href='/login' className='enlaceLogin'><p>¿Ya tienes cuenta? ¡Inicia Sesión!</p></a>
                        </section>
                    )}
                </main>
            </div>

            <Footer></Footer>

        </div>
    );
} export default Registro;