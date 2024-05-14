import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './UserDashboard.module.css'

function UserDashboard() {

  const navigate = useNavigate();
  
  useEffect(() => {
    const userString = localStorage.getItem('user');
    const userObject = JSON.parse(userString);
    if(userObject){

    }else navigate('/inscripciones')
}, []);


  return (
    <>
      <div className={style.logOut}>
        <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.imglogOut} src="https://i.postimg.cc/G3VXN62R/Recurso-1log-Out.png" alt="" />
      </div>
      <div className={style.fondolin} >
        <div className={style.botones}>
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.boton} src="https://i.postimg.cc/85WbVzsV/Recurso-3boton-Descubre.png" alt="" />
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.boton} src="https://i.postimg.cc/j2b4qYJn/Recurso-4boton-Experimenta.png" alt="" />
          <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.boton} src="https://i.postimg.cc/mkyNtpQX/Recurso-5boton-Informacion.png" alt="" />
        </div>
        <div className={style.fondoInfo}>
          <img className={style.fondoDash} src="https://i.postimg.cc/dDMPV1jm/Recurso-8fondo-Dashboard.png" alt="" />
          <img className={style.fondoDashCel} src="https://i.postimg.cc/xj34k6TV/Recurso-9fondo-Dashboard-Cel.png" alt="" />
          
        </div>
      </div>
    </>
  )
}

export default UserDashboard;