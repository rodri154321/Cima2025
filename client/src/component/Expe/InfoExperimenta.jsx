import React from "react";
import { motion } from 'framer-motion';
import missionTrips from "./ExpTransoceanicas"
import style from "./InfoExperimenta.module.css"

const InfoExperimenta = ({ index }) => {

    const specificTrip = missionTrips[index];

    if (!specificTrip) {
        return <p>Muy Pronto mas Practicas</p>;
      }

    return (

        <div className={style.card}>

            <div className={style.content}>

                <span className={style.title}>
                    {specificTrip.Titulo}
                </span>

                <p className={style.desc}>
                    {specificTrip.Descripcion}
                </p>

                <p className={style.desc}>
                    Fecha:
                    {specificTrip.Fecha}
                </p>

                <p className={style.desc}>
                    Invercion:
                {specificTrip.Inversion}
                </p>

            </div>
            <div className={style.image}></div>
        </div>
    )
}

export default InfoExperimenta;