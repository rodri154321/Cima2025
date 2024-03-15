import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import style from './Landin.module.css';
import { motion, useScroll, useTransform } from 'framer-motion'

// https://i.postimg.cc/m2dJjFN9/Logo2025.png

const Landin = () => {

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 2], ["0%", "-200%"]);


  return (
    <>

      <div className={style.fondo1}>

        <motion.div className={style.fondoplx}
          style={{ y }}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <img className={style.logo} src="https://i.postimg.cc/63Lcpms0/Recurso-1-Logo2025.png" alt="Logo" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}>
            <img className={style.sublogo} src="https://i.postimg.cc/KzyQFyWj/Recurso-26-P1-M.png" alt="6 paises 1 mision" />
          </motion.div>

          <div className={style.banderas}>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/pTPwCN24/argentina.png" alt="Argentina" />
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/3R9PbLNR/bolivia.png" alt="Bolivia" />
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/J0n9wbHQ/chile.png" alt="Chile" />
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/hv5NKf9R/paraguay.png" alt="Paraguay" />
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/1RCkGYb7/peru.png" alt="Peru" />
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className={style.bandera} src="https://i.postimg.cc/qMN9jxTJ/uruguay.png" alt="Uruguay" />
          </div>
        </motion.div>
      </div>

      <div className={style.contenedorvideo}>
        <ReactPlayer
          className={style.reactPlayer}
          url='https://www.youtube.com/watch?v=9PL_NJXXOIg'
          height="100vh"
          width="100%"
          controls
          origin="https://www.youtube.com"
        />
      </div>

      <div className={style.fondolin}>

        <div className={style.descubrediv}>

          <div className={style.Descubretext}>
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.des} src="https://i.postimg.cc/hPfSVFCf/Recurso-5-Descubre.png" alt="Descubre" />

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.exp} src="https://i.postimg.cc/J4vRqTgK/Recurso-4-Experimenta.png" alt="Experimenta" />

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.cima} src="https://i.postimg.cc/Vs7fSsWx/Recurso-3-Cima.png" alt="Cima" />
          </div>
          <div className={style.conteinerelative}>
            <p className={style.textoexp}>Tendrás la posibilidad de capacitarte <br /> en diferentes temáticas junto a<br />
              oradores, talleristas y misioneros con<br />experiencia local y global.</p>
            <img className={style.descubreimg} src="https://i.postimg.cc/Z5Wxkqw4/Recurso-6-Descubreflecha.png" alt="Descubre" />
          </div>

        </div>

        <div className={style.oradoresdiv}>

          <div className={style.divTextoOradores}>
            <img className={style.oradoresimg} src="https://i.postimg.cc/vZpSHmHL/Recurso-1-Oradores.png" alt="Oradores" />

            <p className={style.textoOra}>
              La mayoria de los oradores que<br />
              tendremos son parte activa de la<br />
              mision global, esto hace que no<br />
              solo cuenten con experiencias desde<br />
              la teoría, sino que cada uno de ellos<br />
              ha vivenciado lo que transmite y ha<br />
              visto lo que Dios esta haciendo en el<br />
              campo misionero no alcanzado.</p>
          </div>

          <div className={style.imagenesOradores}>
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              exit={{ opacity: 0, y:50}}
              className={style.imageneOradores} src="https://i.postimg.cc/13gjQFP3/Recurso-2-Thomas.png" alt="Thomas" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/L5HWK04c/Recurso-3-Helder.png" alt="Helder" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/dQBXmv4w/Recurso-4-Mika.png" alt="Mika" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/4yBSJbmm/Recurso-5-Soon.png" alt="Soon" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/Wb1y5KHr/Recurso-7-Rafael.png" alt="Rafael" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/J4Y2vqfF/Recurso-6-Hebert.png" alt="Hebert" />
          </div>

        </div>

      </div>

    </>
  );
};

export default Landin;