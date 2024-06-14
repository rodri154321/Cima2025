import React from "react";
import { motion } from "framer-motion";
import style from "./UserExperimenta.module.css"

function UserExperimenta() {

    return (
        <>
            <div className={style.fondolin}>

                <div className={style.contenido}>
                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.recurso}
                        src='https://i.postimg.cc/MHGjnyFz/Recurso-7recursoclarito.png' alt='Experimenta' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.recurso2}
                        src='https://i.postimg.cc/MHGjnyFz/Recurso-7recursoclarito.png' alt='Experimenta' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.TituloExp}
                        src='https://i.postimg.cc/ryCGfKpd/Recurso-1experimenta.png' alt='Experimenta' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.subTituloExp}
                        src='https://i.postimg.cc/nLLpm01j/Recurso-1-Experiencia.png' alt='50 Practicas' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.textoExp}
                        src='https://i.postimg.cc/B6VVzCDz/Recurso-1conoce.png' alt='Conocelas' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                        className={style.botones}
                        src='https://i.postimg.cc/j2nzSH1B/Recurso-1-Ingresa-Aqui.png' alt='Conocelas Boton' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.textoExp}
                        src='https://i.postimg.cc/zvHcYRFG/Recurso-2importante.png' alt='Info Importante' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                        className={style.botones}
                        src='https://i.postimg.cc/j2nzSH1B/Recurso-1-Ingresa-Aqui.png' alt='Info Boton' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.textoExp}
                        src='https://i.postimg.cc/pyN1WXsY/Recurso-3inscribite.png' alt='Inscripcion' />

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                        className={style.botones}
                        src='https://i.postimg.cc/Sj0c2XFR/Recurso-2-Ingresa-Aquinar.png' alt='Inscripcion Boton' />
                </div>
            </div>
        </>
    )

}

export default UserExperimenta;