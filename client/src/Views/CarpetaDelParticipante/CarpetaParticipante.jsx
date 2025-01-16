import React from 'react';
import titulo from '../../assets/TITULOCARPETADIGITAL.webp';
import style from './CarpetaParticipante.module.css';

const CarpetaParticipante = () => {
    return (
        <div className={style.container}>
            <img className={style.titulo} src={titulo} alt="Titulo" />
        </div>
    );
};

export default CarpetaParticipante;