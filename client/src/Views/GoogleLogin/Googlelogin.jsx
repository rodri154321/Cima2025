import React from 'react';

import style from "./Googlelogin.module.css"
import Login from '../../component/Login';
import serviceLogin from "../../utils/serviceLogin.js"
const Googlelogin = () => {

    return (
        <div className={style.fondolin}>
            <img className={style.recuadro} src="https://i.postimg.cc/3NgJ1PJY/Recurso-1login.png" alt="Login" />
            <div className={style.contenedorBtn}>
                <h2>Inicia Secion</h2>
                <Login/>
            </div>
        </div>
    );
};

export default Googlelogin;