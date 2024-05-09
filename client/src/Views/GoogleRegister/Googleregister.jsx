import React from 'react';

import style from "./Googleregister.module.css"
import Login from '../../component/Login';
import serviceRegister from "../../utils/serviceResgister.js"
const Googleregister = () => {

    return (
        <div className={style.fondolin}>
            <img className={style.recuadro} src="https://i.postimg.cc/9M9WXv9Z/Recurso-1register.png" alt="cuadro de registro" />
            <div className={style.contenedorBtn}>
                <h2>Registrate</h2>
            <Login service ={serviceRegister}/>
            </div>
            
        </div>

    );
};

export default Googleregister;