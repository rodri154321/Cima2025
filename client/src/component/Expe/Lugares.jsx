import React, { useState, useEffect } from "react";
import { missionLatam } from "./PaisesLatam";
import { motion } from 'framer-motion';
import style from "./Lugares.module.css";
import InfoExperimentaLatam from "./InfoExperimentaLatam";

const Lugares = ({index}) => {

    const [tripIndex, setTripIndex] = useState(0);
    const [numeroPractica, setNumeroPractica] =useState(0);
    const [infoPais, setInfoPais] = useState(0);
    const misionFilter = missionLatam[index];

    useEffect(() => {
        if (infoPais === 1) {
            setInfoPais(0);
        }
    }, [index]);

    return (

        <div className={style.card}>
            <div className={style.content}>
                <h1>{misionFilter.titulo}</h1>
                {misionFilter.locations.map((key, index) => <motion.div onClick={() => { setTripIndex(misionFilter.country); setInfoPais(1);setNumeroPractica(index) }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.image}>
                    <img className={style.cont} src="https://i.postimg.cc/Lsb7PP0s/Recurso-27-Lug.png" alt="" />
                    <h1 className={style.lugares}>{key}</h1>
                </motion.div>)}
            </div>
            <div className={style.InfoPrec}>
                {infoPais == 1 ? <InfoExperimentaLatam practica={tripIndex} index={numeroPractica} /> : ""}
            </div>

        </div>
    )
}

export default Lugares;