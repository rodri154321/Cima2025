import React, { useState } from "react";
import { motion } from 'framer-motion';
import style from "./Experimenta.module.css"
import InfoExperimenta from "../../component/Expe/InfoExperimenta";
import Lugares from "../../component/Expe/Lugares";

const Experimenta = () => {

    const banderasImgTrans = [
        "https://i.postimg.cc/vHGVzxJY/Recurso-25-Tai.png",       
        "https://i.postimg.cc/tT9qj9Rb/Recurso-24-Alb.png",
        "https://i.postimg.cc/xdvfhX2g/Recurso-22-Mac.png",
        "https://i.postimg.cc/25Rj04PV/Recurso-20-Esp.png",
        "https://i.postimg.cc/zBkfbV23/Recurso-15-Tur.png",
        "https://i.postimg.cc/L5C6DGpp/Recurso-16-Sen.png",
        "https://i.postimg.cc/C5LxjS97/Recurso-14ken.png",
    ]

    const banderasImg = [
        "https://i.postimg.cc/Ss4sxWrw/Recurso-12-Arg.png",
        "https://i.postimg.cc/fTPR94C7/Recurso-18-Per.png",
        "https://i.postimg.cc/P58rb6Vg/Recurso-19-Bol.png",
        "https://i.postimg.cc/bNrvrYxN/Recurso-17-Chi.png",
        "https://i.postimg.cc/WpYfdgCq/Recurso-26-Par.png",
        "https://i.postimg.cc/QN0tjKWy/Recurso-13-Uru.png",
    ]
    //https://postimg.cc/gallery/33yQd0S => galeria de banderas

    const [oceans, setOceans] = useState(0);
    const [tripIndex, setTripIndex] = useState(0);

    return (
        <div className={style.general}>
            <div className={style.fondolin}>
                <img className={style.fondo} src="https://i.postimg.cc/Vkf7yTnt/Recurso-3fondo-Experimenta.png" alt="" />
                <img className={style.titulo} src="https://i.postimg.cc/TYqk4GLG/Recurso-1titulo-Experimenta.png" alt="Experimenta" />
                <div className={style.banderas}>
                    {banderasImgTrans.map((url, index) => (
                        <motion.img onClick={() => { setTripIndex(index); setOceans(0); }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.imgBanderas} src={url} alt={index + 1} />
                    ))}
                    {/* {banderasImg.map((url, index) => (
                        <motion.img onClick={() => { setTripIndex(index); setOceans(1); }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.imgBanderas} src={url} alt={index + 1} />
                    ))} */}
                </div>
                <div className={style.info}>
                    {oceans==0 ? <InfoExperimenta index={tripIndex} /> : <Lugares index={tripIndex} />}
                    
                </div>
            </div>
            <div className={style.fondo2}>
            </div>

        </div>
    )

}

export default Experimenta