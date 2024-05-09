import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

import style from "./Inscripciones.module.css"

const Inscripciones = () => {

    return (
        <div className={style.fondolin}>
            <div className={style.registro}>
                <img className={style.imgRa} src="https://i.postimg.cc/Cxm8gfCk/Recurso-1registrate-Ac.png" alt="Registrate Acá" />
                <Link to='/register'>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.imgInscripciones} src="https://i.postimg.cc/RC25gPjn/Recurso-3inscripciones.png" alt="inscripciones" />
                </Link>
            </div>
            <div className={style.logeo}>
                <img className={style.imgYateInsc} src="https://i.postimg.cc/fW5LrhMg/Recurso-4siyateinsc.png" alt="loguin acá" />
                <Link to='/login'>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.imgIngreso} src="https://i.postimg.cc/LsTK82Cc/Recurso-5ingresaaqui.png" alt="ingreso" />
                </Link>
            </div>
            <div className={style.cortes}>
                <img className={style.corteUno} src="https://i.postimg.cc/T3TXMKQV/Recurso-6corteuno.png" alt="corte promocional 1" />
                <img className={style.otrosCortes} src="https://i.postimg.cc/3JntNWYC/Recurso-7otros-Cortes.png" alt="Corte 2, 3 y 4" />
            </div>
        </div>
    );
};

export default Inscripciones;