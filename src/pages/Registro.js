import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h1>Formulario de Registro</h1>
            {formSubmitted ? (
                <section>
                    <p>¡Gracias por registrarte!</p>
                    <a href='/perfil' className='boton'><p>¡Accede a tu perfil!</p></a>
                </section>
            ) : (
                <section>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formValues.nombre} onChange={handleInputChange} />
                            {formErrors.nombre && <p>{formErrors.nombre}</p>}
                        </div>
                        <div>
                            <label htmlFor="apellidos">Apellido</label>
                            <input type="text" name="apellidos" value={formValues.apellidos} onChange={handleInputChange} />
                            {formErrors.apellidos && <p>{formErrors.apellidos}</p>}
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" name="email" value={formValues.email} onChange={handleInputChange} />
                            {formErrors.email && <p>{formErrors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" value={formValues.password} onChange={handleInputChange} />
                            {formErrors.password && <p>{formErrors.password}</p>}
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                            <input type="password" name="confirmPassword" value={formValues.confirmPassword} onChange={handleInputChange} />
                            {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
                        </div>
                        <button type="submit" >Registrarse</button>
                    </form>
                    <br></br>
                    <br></br>
                    <a href='/login' className=''><p>¿Ya tienes cuenta? Log In</p></a>
                </section>
            )}
        </div>
    );
} export default Registro;