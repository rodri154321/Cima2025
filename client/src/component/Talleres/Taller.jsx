import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./Taller.module.css";

function Taller() {

    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const userObject = JSON.parse(userString);

    const [allTalleres, setAllTalleres] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const todoslostalleres = async () => {
        try {
            const response = await fetch('http://localhost:3000/taller/getTalleres');
            const data = await response.json();
            setAllTalleres(data);
        } catch (error) {
            console.error('Error al obtener los talleres:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        todoslostalleres();
    }, []);


    return (
        <>

            <h1 className={style.titulo}>TALLERES</h1>

            <div className={style.conteiner}>

                {allTalleres.map((taller) => (
                    <div className={style.card}>
                        <div className={style.card__title}>{taller.nombreTaller}</div>
                        <div className={style.card__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
                        <div className={style.card__indicator}><span className={style.card__indicator_amount}>{taller.cupo}</span> Cupos / <span className={style.card__indicator_percentage}>{taller.cantidadInscriptos}</span></div>
                        <div className={style.card__progress}><progress max={taller.cupo} value={taller.cantidadInscriptos}></progress></div>
                    </div>
                ))}

            </div>
        </>
    )


}

export default Taller