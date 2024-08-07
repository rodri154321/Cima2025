import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import style from "./UserExperimenta.module.css"

function UserExperimenta() {

    const navigate = useNavigate();
    const [infoUser, setInfoUser] = useState('');

    const userString = localStorage.getItem('user');
    const userObject = JSON.parse(userString);

    useEffect(() => {
        if (userObject) {
            setInfoUser(userObject);
        } else navigate('/inscripciones')
    }, [navigate]);


    const handlerAcces = () => {
        if (userObject.experimenta == null) {
            // if (userObject.montoPagado && userObject.montoPagado > 0 && userObject.experimenta == null) {
            navigate('/formexperimenta')
        } else {
            Swal.fire({
                title: "Ups...",
                text: "ya estas inscripto en otra práctica",
                icon: "info",
                customClass: {
                    confirmButton: style.confirmButton
                }
            })
        }
    }

    return (
        <>
            <div className={style.fondolin}>

                <div className={style.contenido}>
                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.recurso}
                        src='https://i.postimg.cc/MHGjnyFz/Recurso-7recursoclarito.png' alt='Cuadrados' />

                    <motion.img
                        // initial={{ scale: 0, opacity: 0 }}
                        // whileInView={{ scale: 1, opacity: 1 }}
                        className={style.recurso2}
                        src='https://i.postimg.cc/xT532p5s/Recurso-1mapa.png' alt='mapa' />

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

                    <div className={style.subtitulo}>
                        <h1 className={style.descripcion}>Es la oportunidad de poner en práctica lo aprendido en un viaje misionero de corto plazo. Podrás sumarte al trabajo de una iglesia o ministerio en Latinoamérica, África, Asia o Europa. ¡Tu profesión y habilidades pueden ser de mucha ayuda!
                            Cada lugar tiene una duración de tiempo y costo distinto.
                        </h1>
                    </div>

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.textoExp}
                        src='https://i.postimg.cc/B6VVzCDz/Recurso-1conoce.png' alt='Conocelas' />

                            <Link to={"https://bit.ly/ExperimentaCIMA2025"} target="_blank" rel="noopener noreferrer" className={style.Link}>
                                <motion.img
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                                    className={style.botones}
                                    src='https://i.postimg.cc/j2nzSH1B/Recurso-1-Ingresa-Aqui.png' alt='Conocelas Boton' />
                            </Link>

                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className={style.textoExp}
                        src='https://i.postimg.cc/zvHcYRFG/Recurso-2importante.png' alt='Info Importante' />

                    <Link to={"/infoimportanteexperimenta"} className={style.Link}>
                        <motion.img
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                            className={style.botones}
                            src='https://i.postimg.cc/j2nzSH1B/Recurso-1-Ingresa-Aqui.png' alt='Info Boton' />
                    </Link>

                    {userObject.experimenta !== null ? (
                        <div className={style.divIf}>
                            <h2 className={style.textoYaInscriptoChico}>Ya estas anotado en: </h2>
                            <h1 className={style.textoYaInscripto}> {userObject.experimenta} </h1>
                        </div>
                    )
                        :
                        (
                            <div className={style.divIf}>
                                <motion.img
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    className={style.textoExpInscripcion}
                                    src='https://i.postimg.cc/pyN1WXsY/Recurso-3inscribite.png' alt='Inscripcion' />

                                <motion.img
                                    onClick={handlerAcces}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                                    className={style.botonesInscripcion}
                                    src='https://i.postimg.cc/Sj0c2XFR/Recurso-2-Ingresa-Aquinar.png' alt='Inscripcion Boton' />
                            </div>
                        )
                    }

                </div>

                <div className={style.divContactos}>

                    <Link className={style.LinkContactos}>
                        <img className={style.contactos} src="https://i.postimg.cc/7LH6yXBN/Recurso-1contacto-Uno.png" alt="" />
                    </Link>
                    <Link className={style.LinkContactos}>
                        <img className={style.contactos} src="https://i.postimg.cc/Y9VqY7tX/Recurso-2contacto-Dos.png" alt="" />
                    </Link>
                    <Link className={style.LinkContactos}>
                        <img className={style.contactos} src="https://i.postimg.cc/43W34tqR/Recurso-3contacto-Tres.png" alt="" />
                    </Link>
                    <Link className={style.LinkContactos}>
                        <img className={style.contactos} src="https://i.postimg.cc/qRgvNqHh/Recurso-4contacto-Cuatro.png" alt="" />
                    </Link>
                    <Link className={style.LinkContactos}>
                        <img className={style.contactos} src="https://i.postimg.cc/gjZcK7JG/Recurso-5contacto-Cinco.png" alt="" />
                    </Link>
                    <Link className={style.LinkContactos}>
                        <img className={style.contactos} src="https://i.postimg.cc/t7GqvzZW/Recurso-6contacto-Seis.png" alt="" />
                    </Link>

                </div>
            </div>
        </>
    )

}

export default UserExperimenta;