import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from "./AdminDashboard.module.css";
import AdminExperimenta from "../../component/Administrator/AdminExperimenta";

function LoginAdmin() {

    const navigate = useNavigate();
    const userString = localStorage.getItem('admin');
    const userObject = JSON.parse(userString);

    
    useEffect(() => {
        if (userObject) {
            
        } else {
            navigate('/')
        }
    }, [navigate]);

    return (
        <div className={style.grande}>
            <div className={style.logOut}>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.imglogOut} src="https://i.postimg.cc/G3VXN62R/Recurso-1log-Out.png" alt="" />
                <div className={style.contenedorLogo}>
                    <img className={style.logo} src="https://i.postimg.cc/63Lcpms0/Recurso-1-Logo2025.png" alt="Logo" />
                </div>
            </div>
            <div className={style.contenedor}>
                {/* <div className={style.contenedorBanderas}>
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/pTPwCN24/argentina.png" alt="Argentina" />
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/3R9PbLNR/bolivia.png" alt="Bolivia" />
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/J0n9wbHQ/chile.png" alt="Chile" />
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/hv5NKf9R/paraguay.png" alt="Paraguay" />
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/1RCkGYb7/peru.png" alt="Peru" />
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/qMN9jxTJ/uruguay.png" alt="Uruguay" />
                </div> */}

                <AdminExperimenta/>
            </div>

        </div>
    )

}

export default LoginAdmin;