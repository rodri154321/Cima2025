import React from 'react';
import ReactPlayer from 'react-player';
import { motion, useScroll, useTransform } from 'framer-motion';


import style from './Landin.module.css';



const Landin = () => {


  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 3], ["0%", "-200%"]);



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
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: 100 }} className={style.textoexp}>Tendrás la posibilidad de capacitarte <br /> en diferentes temáticas junto a<br />
              oradores, talleristas y misioneros con<br />experiencia local y global.</motion.p>
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: -100 }}

              className={style.descubreimg} src="https://i.postimg.cc/Z5Wxkqw4/Recurso-6-Descubreflecha.png" alt="Descubre" />
          </div>

        </div>

        <div className={style.oradoresdiv}>

          <div className={style.divTextoOradores}>
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: 100 }} className={style.oradoresimg} src="https://i.postimg.cc/vZpSHmHL/Recurso-1-Oradores.png" alt="Oradores" />

            <motion.p initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: -100 }} className={style.textoOra}>
              La mayoria de los oradores que<br />
              tendremos son parte activa de la<br />
              mision global, esto hace que no<br />
              solo cuenten con experiencias desde<br />
              la teoría, sino que cada uno de ellos<br />
              ha vivenciado lo que transmite y ha<br />
              visto lo que Dios esta haciendo en el<br />
              campo misionero no alcanzado.</motion.p>
          </div>

          <div className={style.imagenesOradores}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              exit={{ opacity: 0, y: 50 }}
              className={style.imageneOradores} src="https://i.postimg.cc/13gjQFP3/Recurso-2-Thomas.png" alt="Thomas" />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/L5HWK04c/Recurso-3-Helder.png" alt="Helder" />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/dQBXmv4w/Recurso-4-Mika.png" alt="Mika" />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/4yBSJbmm/Recurso-5-Soon.png" alt="Soon" />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/Wb1y5KHr/Recurso-7-Rafael.png" alt="Rafael" />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              className={style.imageneOradores} src="https://i.postimg.cc/J4Y2vqfF/Recurso-6-Hebert.png" alt="Hebert" />
          </div>

        </div>

        <div className={style.talleresDiv}>

          <div className={style.divTextoTalleres}>

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.talleresImg} src="https://i.postimg.cc/y6t8Hm5Z/Plenarias-y-Talleres.png" alt="Plenarias  y Talleres" />

            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.textoTalleres}>
              Cada día habrá múltiples <br />
              temáticas que podrás<br />
              elegir para capacitarte.<br />
              Te compartimos solo<br />
              algunos temas que<br />
              tocaremos.<br />
            </motion.p>
          </div>

          <div className={style.divSlide}>
            <p className={style.textoSlide}>
              Cada día habrá múltiples <br />
              temáticas que podrás<br />
              elegir para capacitarte.<br />
              Te compartimos solo<br />
              algunos temas que<br />
              tocaremos.<br />
            </p>
            <p className={style.textoSlide}>
              Cada día habrá múltiples <br />
              temáticas que podrás<br />
              elegir para capacitarte.<br />
              Te compartimos solo<br />
              algunos temas que<br />
              tocaremos.<br />
            </p>
            <p className={style.textoSlide}>
              Cada día habrá múltiples <br />
              temáticas que podrás<br />
              elegir para capacitarte.<br />
              Te compartimos solo<br />
              algunos temas que<br />
              tocaremos.<br />
            </p>
          </div>
        </div>

        <div className={style.divOper}>

          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.imgOper} src="https://i.postimg.cc/PqQd2KnF/operacion-Cima.png" alt="Operacion Cima" />

          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.textoOper}>
            El quinto día todos los cimeños<br />
            saldremos a las calles a realizar<br />
            una gran diversidad de actividades,<br />
            con el fin de compartir las buenas<br />
            nuevas de Jesús.</motion.p>

        </div>

        <div className={style.divProg}>

          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.imgProg} src="https://i.postimg.cc/KY2ZPwwM/Recurso-2programa-Pastores.png" alt="Programa de Pastores" />

          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.textoProg}>
            El quinto día todos los cimeños<br />
            saldremos a las calles a realizar<br />
            una gran diversidad de actividades,<br />
            con el fin de compartir las buenas<br />
            nuevas de Jesús.</motion.p>

        </div>

      </div>
    </>
  );
};

export default Landin;