import React from "react";
import { motion } from 'framer-motion';
import missionTrips from "./ExpTransoceanicas"
import { Carousel } from "react-responsive-carousel";
import style from "./InfoExperimenta.module.css"

const InfoExperimenta = ({ index }) => {

    const specificTrip = missionTrips[index];
    console.log(specificTrip);

    if (!specificTrip) {
        return <p>Muy Pronto mas Practicas</p>;
    }

    return (

        <div className={style.card}>
            <img className={style.img} src={specificTrip.Info} alt="" />
        </div>

        // <div className={style.card}>

        //     <div className={style.content}>

        //         <span className={style.title}>
        //             {specificTrip.Titulo}
        //         </span>

        //         <p className={style.desc}>
        //             {specificTrip.Descripcion}
        //         </p>

        //         <p className={style.desc}>
        //             Fecha:
        //             {specificTrip.Fecha}
        //         </p>

        //         <p className={style.desc}>
        //             Invercion:
        //             {specificTrip.Inversion}
        //         </p>

        //     </div>

        //     <div className={style.image}>
        //         <Carousel showStatus={false}
        //              showThumbs={false} centerMode centerSlidePercentage={60} swipeable={true} autoPlay >
        //             {specificTrip.Fotos.map((index) => (
        //                 <div className={style.carucel}>
        //                     <img className={style.imgCarucel} src={index} alt="" />
        //                 </div>
        //             ))}

        //         </Carousel>
        //     </div>
        // </div>
    )
}

export default InfoExperimenta;