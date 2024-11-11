import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import style from "./LoginAdmin.module.css";


function LoginAdmin() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin({
            ...login,
            [name]: value // Actualiza el campo correspondiente en el estado
        });

    };



    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = {
            email: login.email,
            password: login.password
        };
    
        try {
            const queryString = new URLSearchParams(formData).toString();
            const response = await fetch(`https://cima2025.up.railway.app/admin/loginAdmin?${queryString}`, {
                method: 'GET'
            });
    
            if (response.ok) {
                localStorage.setItem('admin', JSON.stringify(true))
                navigate('/dashboardadminsregional25');
                Swal.fire({
                    title: "¡Bienvenido al administrador!",
                    text: "HOLA",
                    icon: "success",
                    customClass: {
                        confirmButton: style.confirmButton
                    }
                });
            } else {
                console.error('Error en la solicitud:', response.statusText);
                Swal.fire({
                    title: "Error",
                    text: "Algo salió mal, intenta de nuevo más tarde",
                    icon: "error",
                    customClass: {
                        confirmButton: style.confirmButton
                    }
                });
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            Swal.fire({
                title: "Error",
                text: `Algo salió mal, intenta de nuevo más tarde: ${error.message}`,
                icon: "error",
                customClass: {
                    confirmButton: style.confirmButton
                }
            });
        }
    };

    return (

        <div className={style.contenedor}>

            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.title}>HOLA,<br /><span>si tenes dudas<br /> hablale a los de sistema</span></div>
                <input className={style.input} name="email" placeholder="Email" type="email" value={login.email}
                    onChange={handleChange} />
                <input className={style.input} name="password" placeholder="Password" type="password" value={login.password}
                    onChange={handleChange} />
                <button className={style.buttonconfirm} type="submit">Cumple tu destino →</button>
            </form>

        </div>

    )

}

export default LoginAdmin;