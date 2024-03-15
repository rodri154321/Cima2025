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
            <img className={style.logo} src="svgs\Logo.svg" alt="Logo" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}>
            <img className={style.sublogo} src="svgs\6p1m.svg" alt="6 paises 1 mision" />
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
              className={style.des} src="svgs\des.svg" alt="Descubre" />

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.exp} src="svgs\Recurso 1exp.svg" alt="Experimenta" />

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.cima} src="svgs\cima.svg" alt="Cima" />
          </div>
          <div className={style.conteinerelative}>
            <p className={style.textoexp}>Tendrás la posibilidad de capacitarte <br /> en diferentes temáticas junto a<br />
              oradores, talleristas y misioneros con<br />experiencia local y global.</p>
            <img className={style.descubreimg} src="svgs\1descubre.svg" alt="Descubre" />
          </div>

        </div>

        <div className={style.oradoresdiv}>

          <div className={style.divTextoOradores}>
            <img className={style.oradoresimg} src="svgs\Oradores.svg" alt="Oradores" />

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
              exit={{ opacity: 0, y:-50}}
              className={style.imageneOradores} src="svgs\oradores\Thomas.svg" alt="Thomas" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="svgs\oradores\Helder.svg" alt="Thomas" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="svgs\oradores\Mika.svg" alt="Thomas" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="svgs\oradores\Soon.svg" alt="Thomas" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="svgs\oradores\Rafael.svg" alt="Thomas" />
            <motion.img
              initial={{opacity: 0, y:50 }}
              whileInView={{opacity: 1, y:0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="svgs\oradores\Hebert.svg" alt="Thomas" />
          </div>

        </div>

      </div>

    </>
  );
};

export default Landin;