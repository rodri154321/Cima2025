import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './UserDashboard.module.css'

function UserDashboard() {

  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState('');


    useEffect(() => {
      const userString = localStorage.getItem('user');
      const userObject = JSON.parse(userString);
      if(userObject){
        setInfoUser(userObject);
      }else navigate('/inscripciones')
  }, []);

  const logOutHandler = () =>{
    localStorage.clear();
    navigate('/inscripciones');
  }

  const anchoVentana = window.innerWidth;

  return (
    <>
      <div className={style.logOut}>
        <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={logOutHandler} className={style.imglogOut} src="https://i.postimg.cc/G3VXN62R/Recurso-1log-Out.png" alt="" />
      </div>
      <div className={style.fondolin} >
        <div className={style.botones}>
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.boton} src="https://i.postimg.cc/85WbVzsV/Recurso-3boton-Descubre.png" alt="" />
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.boton} src="https://i.postimg.cc/j2b4qYJn/Recurso-4boton-Experimenta.png" alt="" />
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.boton} src="https://i.postimg.cc/mkyNtpQX/Recurso-5boton-Informacion.png" alt="" />
        </div>
        <div className={style.fondoInfo}>

          <img className={style.grupoPequeño} src="https://i.postimg.cc/vmHLHsqj/Recurso-6grupo-Peque-o.png" alt="Grupo Pequeño" />

          <div className={style.userData}>
            <p>Nombre: {infoUser.nombre}</p>
            <p>Apellido: {infoUser.apellido}</p>
            <p>D.N.I: {infoUser.documento}</p>
            <p>Pais de Residencia: {infoUser.paisResidencia}</p>
          </div>

          <div className={style.fondoFotos}>
            {anchoVentana < 600 ? (
              <img className={style.fondoDash} src="https://i.postimg.cc/xj34k6TV/Recurso-9fondo-Dashboard-Cel.png" alt="Imagen para celular" />
            ) : (
              <img className={style.fondoDash} src="https://i.postimg.cc/dDMPV1jm/Recurso-8fondo-Dashboard.png" alt="Imagen para computadora" />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard;