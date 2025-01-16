import React from 'react';
import titulo from '../../assets/TITULOCARPETADIGITAL.webp';
import style from './CarpetaParticipante.module.css';
import styladed from "../../assets/fondo1.webp"

const CarpetaParticipante = () => {
    return (
        <div className={style.container}>
            <img className={style.titulo} src={titulo} alt="Titulo" />

            <button className={style.button}>DESCRIPCIONES,
                PROGAMAS Y ACTIVIDADES</button>
            <button className={style.button}>MOVIDA</button>
            <button className={style.button}>MOVIDA</button>
            <button className={style.button}>MOVIDA</button>
            <button className={style.button}>MOVIDA</button>
            <button className={style.button}>MOVIDA</button>
            <button className={style.button}>MOVIDA</button>
            <button className={style.button}>MOVIDA</button>
            <button className={style.button}>MOVIDA</button>
            <button className={style.button}>MOVIDA</button>

        </div>
    );
};

export default CarpetaParticipante;