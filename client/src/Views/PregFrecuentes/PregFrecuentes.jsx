import React from "react";
import style from "./PregFrecuentes.module.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PregFrecuentes = () => {
    return (
        <>

            <div className={style.conteiner}>
                <img className={style.logo} src="https://i.postimg.cc/4NgvkSkm/Recurso-1pf-Titulo.png" alt="Preguntas Frecuentes" />
                <img className={style.items1} src="https://i.postimg.cc/8zDVvN8N/Recurso-2pf-Titulo.png" alt="Precios" />
                <Link className={style.conteiner} to="/inscripciones">
                    <img className={style.items} src="https://i.postimg.cc/02tY3gDx/Recurso-7pf-Inscripcion.png" alt="Donde Inscribirce" />
                </Link>
                <img className={style.items} src="https://i.postimg.cc/BQvD2hyz/Recurso-8pf-Requisitos.png" alt="Requisitos" />
                <img className={style.items} src="https://i.postimg.cc/y8ZTSQ3H/Recurso-10pf-Incluye.png" alt="Incluye" />
                <img className={style.items} src="https://i.postimg.cc/JnnDj0Yk/Recurso-11pf-Empieza-Termina.png" alt="Empieza-Termina" />
                <img className={style.items} src="https://i.postimg.cc/v86qntgb/Recurso-12pf-Salir.png" alt="Se puede salir?" />
                <img className={style.items} src="https://i.postimg.cc/dtPWjZrd/Recurso-13pf-Donde.png" alt="Donde Es?" />
                <img className={style.items1} src="https://i.postimg.cc/WbG5Wpwy/Recurso-14pf-Que-Levo.png" alt="Que Llevo" />
                <img className={style.items} src="https://i.postimg.cc/W1DhpzYW/Recurso-15pf-Cuanto-Sale.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/mg0hP40b/Recurso-16pf-Moneda.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/prXLwLnB/Recurso-17pf-Recuperar.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/0QvQCfkF/Recurso-18pf-Cambiar-Dato.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/ydTNpZWd/Recurso-19pf-Formar-Grupos.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/nLBr75Jq/Recurso-20pf-Informar-Grupos.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/k4Y05Jps/Recurso-21pf-Hasta-Cuando.png" alt="" />
                <img className={style.items} src="https://i.postimg.cc/vTpCWPM6/Recurso-22pf-Promo-Se-Pierde.png" alt="" />
                <img className={style.items} src="https://i.postimg.cc/904vw33h/Recurso-23pf-Fin-Inscripciones.png" alt="" />
                <div className={style.finalFooter}>
                    <div className={style.mundoLineas}>
                        <img className={style.finalImg} src="https://i.postimg.cc/QxRZdKfb/Recurso-5mundo.png" alt="" />

                        {/* info Argentina */}
                        <img className={style.infoArg} src="https://i.postimg.cc/zX6hKMMf/Recurso-8info-Arg.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaargentina/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igArg} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/movidaarg">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcArg} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Bolivia */}

                        <img className={style.infoBol} src="https://i.postimg.cc/W1xLPqP0/Recurso-11info-Bolivia.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidabolivia/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igBol} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MOVIDABOLIVIAOFICIAL">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcBol} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Paraguay */}

                        <img className={style.infoPar} src="https://i.postimg.cc/sgrHPPy6/Recurso-12info-Paraguay.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaparaguay/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igPar} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MovidaPy">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcPar} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Uruguay */}

                        <img className={style.infoUru} src="https://i.postimg.cc/VvG827RF/Recurso-13info-Uruguay.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidauruguay/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igUru} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/CimaUruguay">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcUru} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Perú */}

                        <img className={style.infoPer} src="https://i.postimg.cc/zD78Lkhj/Recurso-14info-Peru.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaperu/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igPer} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/movidaperu">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcPer} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Chileee */}

                        <img className={style.infoChi} src="https://i.postimg.cc/7Pn0fjXW/Recurso-15info-Chile.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidachile/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igChi} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MovidaChile1">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcChi} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                    </div>
                </div>

                <div className={style.linkmovidaNet}>
                    <a href="https://www.movida-net.com">
                        <img className={style.movidaNet} src="https://i.postimg.cc/j55tZb4x/Recurso-7movida-Net.png" alt="" />
                    </a>
                </div>

            </div>
        </>
    )
};

export default PregFrecuentes;