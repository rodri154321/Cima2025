import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import style from './AdminExperimenta.module.css';



const CambiarPractica = () => {
    const [email, setEmail] = useState('');
    const [practica, setNuevaPractica] = useState('');

    const handleEmailChange = (event) => setEmail(event.target.value);

    const handlePracticaChange = (event) => setNuevaPractica(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { email, practica };

        try {
            const response = await fetch('https://cima2025.up.railway.app/admin/cambiarExpeimenta', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            Swal.fire({
                title: '¡Práctica Cambiada!',
                text: result.message || 'La práctica fue actualizada exitosamente.',
                icon: 'success',
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al cambiar la práctica. Por favor, intenta nuevamente.',
                icon: 'error',
            });
        }
    };

    return (
        <div className={style.cambPrac}>
            <h1 className={style.title}>CAMBIAR PRÁCTICA</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className={style.input}
                    type="email"
                    placeholder="EMAIL"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    className={style.input}
                    type="text"
                    placeholder="Práctica NUEVA"
                    value={practica}
                    onChange={handlePracticaChange}
                />
                <button type="submit" className={style.Btn}>
                    Edit
                    <svg className={style.svg} viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
                </button>
            </form>
        </div>
    );
};

// Componente principal
const AdminExperimenta = () => {
    useEffect(() => {
        Swal.fire({
            title: '¡Bienvenido Admin Experimenta!',
            text: 'Ten cuidado con los cambios',
            icon: 'success',
        });
    }, []);

    return (
        <div className={style.conteiner}>
            <CambiarPractica />
        </div>
    );
};

export default AdminExperimenta;
