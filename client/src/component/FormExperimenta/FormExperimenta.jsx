import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import style from "./FormExperimenta.module.css";
import getInfo from "../../utils/getInfo"


function FormExperimenta() {

    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const userObject = JSON.parse(userString);
    const emailGoogle = userObject.emailGoogle;

    const [form, setForm] = useState({
        emailGoogle,
        experimenta: "",
        otroExperimenta: false,
        añoOtroExperimenta: null,
        aceptoTerminos: false,
    });

    useEffect(() => {
        if (userObject.experimenta == null) {
            // if (userObject.montoPagado && userObject.montoPagado > 0 && userObject.experimenta == null) {
            setForm({ ...form, emailGoogle: emailGoogle })
        } else {
            navigate('/dashboardexperimenta')
        }
    }, [navigate]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        console.log(form);
        setForm((prevForm) => {
            // Si el checkbox "participacion" se desactiva, limpiar el campo "año"
            if (name === 'participacion' && !checked) {
                return {
                    ...prevForm,
                    [name]: checked,
                    anio: '',
                };
            }
            return {
                ...prevForm,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Construir el cuerpo de la solicitud
        const formData = {
            emailGoogle: form.emailGoogle,
            experimenta: form.experimenta,
            otroExperimenta: form.otroExperimenta,
            añoOtroExperimenta: form.añoOtroExperimenta,
            aceptoTerminos: form.aceptoTerminos,
        };

        try {
            console.log(formData);
            // Enviar los datos del formulario a un endpoint
            const response = await fetch('https://cima2025.up.railway.app/login/addExperimenta', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            // Manejar la respuesta del servidor
            if (response.ok) {
                const infonew = await getInfo.infoAct(emailGoogle);
                const result = await response.json();
                console.log('Respuesta del servidor:', result);
                navigate('/dashboardexperimenta');
                Swal.fire({
                    title: "¡Bienvenido a Experimenta!",
                    text: "Acabas de realizar tu pre-inscripción a Experimenta. En los próximos días un miembro del equipo se comunicará contigo para confirmar si tenemos cupos disponibles para el lugar que elegiste, en ese momento se te informará cómo realizar la seña para confirmar tu lugar.",
                icon: "success",
                    customClass: {
                        confirmButton: style.confirmButton
                    }
                })

        } else {
                console.error('Error en la solicitud:', response.statusText);
                Swal.fire({
                    title: "Error",
                    text: "Algo salio mal, intenta de nuevo mas tarde",
                    icon: "error",
                    customClass: {
                        confirmButton: style.confirmButton
                    }
                })
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            Swal.fire({
                title: "Error",
                text: "Algo salio mal, intenta de nuevo mas tarde",
                icon: "error",
                customClass: {
                    confirmButton: style.confirmButton
                }
            })
        }
    };

    const years = [];
    for (let i = 2004; i <= 2024; i++) {
        years.push(i);
    }

    return (

        <div className={style.divGeneral}>

            <img className={style.titulo} src="https://i.postimg.cc/tCxv0n4r/Recurso-2preinscripcion.png" alt="" />

            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.divForm}>
                    <label className={style.subtitulo} htmlFor="opcion">
                        <img className={style.img} src="https://i.postimg.cc/5NNRfWW8/Recurso-6enquepractica.png" alt="" />
                    </label>
                    <select
                        className={style.select1}
                        name="experimenta"
                        value={form.experimenta}
                        onChange={handleChange}
                        required
                    >
                        {/* Agrega las opciones aquí
                        cerradas: 
                        <option value="Kenia">Kenia</option> */}
                        {/*  */}
                        
                        <option value="" disabled>Elige una opción</option>
                        <option value="Tailandia">Tailandia</option>
                        <option value="Turquía">Turquía</option>
                        <option value="Albania">Albania</option>
                        <option value="España">España</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Senegal">Senegal</option>
                    </select>
                </div>

                <div className={style.divForm}>
                    <label className={style.subtitulo}>
                        <img className={style.img} src="https://i.postimg.cc/gkjXr3ZD/Recurso-4otro.png" alt="" />
                    </label>
                    <input
                        type="checkbox"
                        name="otroExperimenta"
                        checked={form.otroExperimenta}
                        onChange={handleChange}
                        className={style.select1}
                    />
                </div>

                <div className={style.divForm}>
                    <label className={style.subtitulo} htmlFor="anio">
                        <img className={style.img} src="https://i.postimg.cc/KjzzkyRz/Recurso-5a-o.png" alt="" />
                    </label>
                    <select
                        name="añoOtroExperimenta"
                        value={form.añoOtroExperimenta}
                        onChange={handleChange}
                        disabled={!form.otroExperimenta}
                        required={form.otroExperimenta}
                        className={style.select1}
                    >
                        <option value="" disabled>Elige un año</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className={style.divForm}>
                    <label>
                        <Link to={"/infoimportanteexperimenta"} target="_blank" rel="noopener noreferrer">
                            Acepto los términos y condiciones
                        </Link>
                    </label>
                    <input
                        type="checkbox"
                        name="aceptoTerminos"
                        checked={form.aceptoTerminos}
                        onChange={handleChange}
                        required
                        className={style.select1}
                    />
                </div>

                <button className={style.boton} type="submit">Enviar</button>
            </form>
        </div>
    );

}

export default FormExperimenta;