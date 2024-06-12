import React from "react";
import { motion } from 'framer-motion';
import {infoLatam} from "./PaisesLatam"
import style from "./InfoExperimenta.module.css"

const InfoExperimentaLatam = ({practica, index }) => {

    const paisPractica = practica;
    const paisTrip = infoLatam[paisPractica];

    const specificTrip = paisTrip[index];
    

    if (!specificTrip) {
        return <p>Muy Pronto mas informacion de esta Practica</p>;
      }

    return (

        <div className={style.card}>

            <div className={style.content}>

                <span className={style.title}>
                    {specificTrip.titulo}
                </span>

                <p className={style.desc}>
                    {specificTrip.descripcion}
                </p>

                <p className={style.desc}>
                    Fecha:
                    {specificTrip.fecha}
                </p>

                <p className={style.desc}>
                    Invercion:
                {specificTrip.inversion}
                </p>

            </div>
            <div className={style.image}></div>
        </div>
    )
}

export default InfoExperimentaLatam;