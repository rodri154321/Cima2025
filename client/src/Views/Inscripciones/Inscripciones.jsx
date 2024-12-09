import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

import style from "./Inscripciones.module.css"

const Inscripciones = () => {

    const anchoVentana = window.innerWidth;

    return (
        <div className={style.fondolin}>
            <div className={style.registro}>
                {/* <img className={style.imgRa} src="https://i.postimg.cc/Vk2tp75r/Recurso-5titulo-Inscripciones.png" alt="Inscripciones" /> */}
                <Link to='/register'>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.imgInscripciones} src="https://i.postimg.cc/cCDgmhVJ/Recurso-6registrate-Aqui.png" alt="inscripciones" />
                </Link>
            </div>
            <div className={style.logeo}>
                <img className={style.imgYateInsc} src="https://i.postimg.cc/GtQzg4sX/Recurso-1logeate.png" alt="loguin acá" />
                <Link to='/login'>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.imgIngreso} src="https://i.postimg.cc/LsTK82Cc/Recurso-5ingresaaqui.png" alt="ingreso" />
                </Link>
            </div>
            <div className={style.cortes}>
                <img className={style.imgNuestrasPromos} src="https://i.postimg.cc/pybXjMFf/Recurso-2nuestraspromos.png" alt="Nuestras Promos" />
                <img className={style.corteUno} src="https://i.postimg.cc/mDnNZbgj/Recurso-1primer-Corte.png" alt="corte promocional 1" />
                <img className={style.otrosCortes} src="https://i.postimg.cc/90VTQrjG/Recurso-2cortes.png" alt="Corte 2, 3 y 4" />
            </div>
            {anchoVentana < 600 ? (
                <img className={style.salvedades} src="https://i.postimg.cc/wBMYnVyN/Recurso-4salvedades-Cel.png" alt="Salvedades" />
            ) : (
                <img className={style.salvedades} src="https://i.postimg.cc/52nMPG01/Recurso-3salvedades.png" alt="Salvedades" />
            )}
            <div className={style.preguntasFrecuentes}>
                <img className={style.pfTitulo} src="https://i.postimg.cc/NjhvQx6H/Recurso-6preguntas-Frecuentes.png" alt="Preguntas Frecuentes" />
                <img className={style.pfCuadros} src="https://i.postimg.cc/RhhLMf3s/Recurso-2pf-Portada.png" alt="Preguntas Frecuentes" />
                <Link className={style.contBoton} to="/preguntasfrecuentes" target="_blank" rel="noopener noreferrer">
                    <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.botonPF} src="https://i.postimg.cc/k4fy3w5R/Recurso-1pf-Boton.png" alt="Mas Preguntas" />
                </Link>
            </div>
        </div>
    );
};

export default Inscripciones;