import React from 'react';
import style from "./Googlelogin.module.css"
import Login from "../../component/Login";

const Googlelogin = () => {
    
    return (
        <div className={style.fondolin}>
            <img className={style.recuadro} src="https://i.postimg.cc/3NgJ1PJY/Recurso-1login.png" alt="Login" />
            <img className={style.titulo} src="https://i.postimg.cc/8PzFpSVq/Recurso-3ingreso.png" alt="Registro" />
            <div className={style.contenedorBtn}>
                <Login/>
            </div>
        </div>
    );
};

export default Googlelogin;