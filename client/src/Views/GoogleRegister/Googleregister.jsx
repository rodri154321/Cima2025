import React from 'react';
import style from "./Googleregister.module.css"
import Register from "../../component/Register";

const Googleregister = () => {

    return (
        <div className={style.fondolin}>
            <img className={style.recuadro} src="https://i.postimg.cc/9M9WXv9Z/Recurso-1register.png" alt="cuadro de registro" />
            <img className={style.titulo} src="https://i.postimg.cc/T29LvPBV/Recurso-1registro.png" alt="Registro" />
            <div className={style.contenedorBtn}>
                <Register />
            </div>
        </div>

    );
};

export default Googleregister;