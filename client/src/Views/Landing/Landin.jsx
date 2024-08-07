"use client";
import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { motion, useScroll, useTransform } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Tilt } from '@jdion/tilt-react';
import { Link } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import style from './Landin.module.css';




const Landin = () => {


  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 3], ["0%", "-400%"]);

  const [oradoresData, setOradoresData] = useState([
    { id: 1, src: 'https://i.postimg.cc/13gjQFP3/Recurso-2-Thomas.png', cartelito: 'https://i.postimg.cc/QM3vHh3J/thomas.png', nombre: 'Thomas', showCartelito: false },
    { id: 2, src: 'https://i.postimg.cc/L5HWK04c/Recurso-3-Helder.png', cartelito: 'https://i.postimg.cc/cJ05dhRD/helder-farvin.png', nombre: 'Helder', showCartelito: false },
    { id: 3, src: 'https://i.postimg.cc/dQBXmv4w/Recurso-4-Mika.png', cartelito: 'https://i.postimg.cc/s2TMBZsy/mika.png', nombre: 'Mika', showCartelito: false },
    { id: 4, src: 'https://i.postimg.cc/4yBSJbmm/Recurso-5-Soon.png', cartelito: 'https://i.postimg.cc/K8JsvL0x/soon-im.png', nombre: 'Soon', showCartelito: false },
    { id: 5, src: 'https://i.postimg.cc/Wb1y5KHr/Recurso-7-Rafael.png', cartelito: 'https://i.postimg.cc/cJMYpqvT/rafael-canada.png', nombre: 'Rafael', showCartelito: false },
    { id: 6, src: 'https://i.postimg.cc/J4Y2vqfF/Recurso-6-Hebert.png', cartelito: 'https://i.postimg.cc/tJfnvkbR/hebert.png', nombre: 'Hebert', showCartelito: false },
    { id: 7, src: 'https://i.postimg.cc/FsyYQ6f2/andrew-burson.png', cartelito: 'https://i.postimg.cc/RFjqbXM4/andrew.png', nombre: 'Andrew', showCartelito: false },
    { id: 8, src: 'https://i.postimg.cc/jdmZGL78/yasir-eric.png', cartelito: 'https://i.postimg.cc/Xv6hP31y/cartelito-verde-3.png', nombre: 'Yasir', showCartelito: false }
  ]);


  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const handleClickImagen = (imagenSrc) => {
    setImagenSeleccionada(imagenSrc);
  };

  const handleCloseModal = () => {
    setImagenSeleccionada(null);
  };

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
          url='https://www.youtube.com/watch?v=TkWx2krzGYk'
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
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: -100 }} className={style.textoexp} src="https://i.postimg.cc/QxYh7pqt/Recurso-1texto-Descubre.png" alt="Cima"></motion.img>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: 100 }}

              className={style.descubreimg} src="https://i.postimg.cc/Z5Wxkqw4/Recurso-6-Descubreflecha.png" alt="Descubre" />
          </div>

        </div>

        <div className={style.expeDiv}>
          <div className={style.experimentarelative}>
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.expe} src=" https://i.postimg.cc/ryCGfKpd/Recurso-1experimenta.png" alt="Experimenta" />

            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: -100 }} className={style.expetexto} src="https://i.postimg.cc/7PfNtJ4c/Recurso-1textoexp.png" alt="Experimenta" />

            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: -100 }} className={style.experimentaImg} src="https://i.postimg.cc/MKH99H6m/Recurso-3experimentaimg.png" alt="Experimenta" />
          </div>
        </div>

        <div className={style.oradoresdiv}>

          <div className={style.divTextoOradores}>
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: -100 }} className={style.oradoresimg} src="https://i.postimg.cc/CxQgHYYL/Recurso-1-Oradores.png" alt="Oradores" />

            <motion.img initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: 100 }} className={style.textoOra}
              src="https://i.postimg.cc/sgfw36S6/Recurso-3texto-Oradores.png" />
          </div>

          <div className={style.imagenesOradores}>

            {oradoresData.map((orador) => (
              <div
                key={orador.id}
                className={style.imagenContainer}
              >
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className={style.imageneOradores}
                  src={orador.src}
                  alt={orador.nombre}
                />

                <img className={style.cartelito} src={orador.cartelito} alt={orador.nombre} />

              </div>
            ))}
          </div>
          <a href='/oradores'>
              <motion.img
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.botonOradores}
                src="https://i.postimg.cc/Jh4QQ8qQ/Recurso-2-Boton-Experimenta.png" alt="Todos los Oradores" />
            </a>

        </div>

        <div className={style.talleresDiv}>

          <div className={style.divTextoTalleres}>

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.talleresImg} src="https://i.postimg.cc/y6t8Hm5Z/Plenarias-y-Talleres.png" alt="Plenarias  y Talleres" />

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.textoTalleres}
              src='https://i.postimg.cc/fRP5ZDbG/Recurso-1texto-Ple-Tall.png'
            />

          </div>
          <div className={style.divSlide}>
            <div className={style.tyPSlide}>
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: -100 }} className={style.imgTyP} src="https://i.postimg.cc/m240Z3Q7/Recurso-1-Norte-De-Africa.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: -100 }} className={style.imgTyP} src="https://i.postimg.cc/gjHtL5v8/Recurso-10-Historiadl-Mision.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: -100 }} className={style.imgTyP} src="https://i.postimg.cc/xTPBXkRh/Recurso-2-Islam.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: -100 }} className={style.imgTyP} src="https://i.postimg.cc/HLFhqbYc/Recurso-3-Pasos-PSM.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: 100 }} className={style.imgTyP} src="https://i.postimg.cc/j2bk5KJR/Recurso-4-Ev-Creativo.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: 100 }} className={style.imgTyP} src="https://i.postimg.cc/1z8d7vQ1/Recurso-5-Proyde-Vida.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: 100 }} className={style.imgTyP} src="https://i.postimg.cc/nhR516N1/Recurso-6-Hospitales.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: -100 }} className={style.imgTyP} src="https://i.postimg.cc/nhcgBHSz/Recurso-7-Adicciones.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: -100 }} className={style.imgTyP} src="https://i.postimg.cc/tR3Mc1LJ/Recurso-8-Choque-Cultural.png" alt="" />
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                exit={{ opacity: 0, x: -100 }} className={style.imgTyP} src="https://i.postimg.cc/PxZRTNJ6/Recurso-9-Amoral-E.png" alt="" />
            </div>
          </div>
        </div>

        <div className={style.divOper}>

          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.imgOper} src="https://i.postimg.cc/PqQd2KnF/operacion-Cima.png" alt="Operacion Cima" />

          <div className={style.ubiCarusel}>
            <div className={style.divoptexto}>
              <motion.img
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }} className={style.textoOper}
                src="https://i.postimg.cc/0y112Ch5/Recurso-1texto-Op-Cima.png" />
            </div>

            <div className={style.divopfotos}>
              <ReactPlayer
                url='https://youtu.be/TfMalLtq9uY'
                width={'100%'}
                height={'100%'}
                controls
                origin="https://www.youtube.com"
              />
            </div>
          </div>

        </div>

        <div className={style.divProg}>

          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.imgProg} src="https://i.postimg.cc/KY2ZPwwM/Recurso-2programa-Pastores.png" alt="Programa de Pastores" />

          <div className={style.ubiCarusel}>


            <div className={style.CaruselPpP}>
              <ReactPlayer
                url='https://youtu.be/e4RREtvP7ro'
                width={'60%'}
                height={'100%'}
                controls
                origin="https://www.youtube.com"
              />
            </div>
            <div className={style.divPpPtexto}>
              <motion.img
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }} className={style.textoProg}
                src='https://i.postimg.cc/c19qqnVN/Recurso-1pdp.png' />
            </div>
          </div>
        </div>

        <div className={style.experimentaDiv} >
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }} className={style.TituloExp}
            src='https://i.postimg.cc/PrtKKHbM/Recurso-4-Experimenta-Sec.png' alt='Experimenta' />


          <div className={style.maparelative} >

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointArg}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Argentina"
              onClick={() => handleClickImagen("https://i.postimg.cc/SsdLSJ3h/Recurso-8ps-Sudamerica.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointChi}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Chile"
              onClick={() => handleClickImagen("https://i.postimg.cc/SsdLSJ3h/Recurso-8ps-Sudamerica.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointPer}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Perú"
              onClick={() => handleClickImagen("https://i.postimg.cc/SsdLSJ3h/Recurso-8ps-Sudamerica.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointBol}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Bolivia"
              onClick={() => handleClickImagen("https://i.postimg.cc/SsdLSJ3h/Recurso-8ps-Sudamerica.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointPar}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Paraguay"
              onClick={() => handleClickImagen("https://i.postimg.cc/SsdLSJ3h/Recurso-8ps-Sudamerica.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointUru}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Uruguay"
              onClick={() => handleClickImagen("https://i.postimg.cc/SsdLSJ3h/Recurso-8ps-Sudamerica.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointBra}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Brasil"
              onClick={() => handleClickImagen("https://i.postimg.cc/76n95BCj/Recurso-1ps-Brasil.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointEcu}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Ecuador"
              onClick={() => handleClickImagen("https://i.postimg.cc/wTv2BQ9b/Recurso-2ps-Ecuador.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointKen}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Kenia"
              onClick={() => handleClickImagen("https://i.postimg.cc/pdDYS0By/Recurso-7ps-Kenia.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointSen}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Senegal"
              onClick={() => handleClickImagen("https://i.postimg.cc/YSczbcYJ/Recurso-6ps-Senegal.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointEsp}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="España"
              onClick={() => handleClickImagen("https://i.postimg.cc/V6mBPj7g/Recurso-3ps-Espa-a.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointAlb}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Albania"
              onClick={() => handleClickImagen("https://i.postimg.cc/6p4hr62r/Recurso-4ps-Mac-Alb.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointMac}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Macedonia"
              onClick={() => handleClickImagen("https://i.postimg.cc/6p4hr62r/Recurso-4ps-Mac-Alb.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointTur}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Turquia"
              onClick={() => handleClickImagen("https://i.postimg.cc/x8jRMKM8/Recurso-1ps-Turquia.png")} />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.pointTai}
              src="https://i.postimg.cc/pVD8Hr2J/Recurso-6point.png" alt="Tailandia"
              onClick={() => handleClickImagen("https://i.postimg.cc/xjggY4Vz/Recurso-5ps-Tailandia.png")} />

            {/* Modal para mostrar la imagen en grande */}
            {/* {imagenSeleccionada && (
              <div className={style.modal} onClick={handleCloseModal}>
                <div className={style.modalContenido} onClick={handleCloseModal}>
                  <img
                    className={style.imagenGrande}
                    src={imagenSeleccionada}
                    alt="Imagen en grande"
                  />
                </div>
              </div>
            )} */}

            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.mapa}
              src="https://i.postimg.cc/ZYjY655R/Recurso-5mapa.png" alt="Mapa Experimenta" />

          </div>

          <div className={style.exprelative}>


            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.latam}
              src="https://i.postimg.cc/QtTPf1Z7/Recurso-3latam.png" alt="Latino America" />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.africa}
              src="https://i.postimg.cc/HLjF7FSB/Recurso-4africa.png" alt="Africa" />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.europa}
              src="https://i.postimg.cc/NjdWFQxK/Recurso-2europa.png" alt="Europa" />
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.asia}
              src="https://i.postimg.cc/cJj27T2Z/Recurso-5asia.png" alt="Asia" />



            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} className={style.transoceanicas}
              src="https://i.postimg.cc/sxnzy43R/Recurso-1transoceanicas.png" alt="Transoceanicas" />

            <Link to={'https://bit.ly/ExperimentaCIMA2025'} target="_blank" rel="noopener noreferrer" >
              <motion.img
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.botonMasInfoExpe}
                src="https://i.postimg.cc/YSmGhxqN/Recurso-2-Boton-Experimenta.png" alt="Transoceanicas" />
            </Link>


          </div>

        </div>

        <div className={style.preguntasFrecuentes}>
          <img className={style.pfTitulo} src="https://i.postimg.cc/NjhvQx6H/Recurso-6preguntas-Frecuentes.png" alt="Preguntas Frecuentes" />
          <img className={style.pfCuadros} src="https://i.postimg.cc/RhhLMf3s/Recurso-2pf-Portada.png" alt="Preguntas Frecuentes" />
          <Link className={style.contBoton} to="/preguntasfrecuentes" target="_blank" rel="noopener noreferrer">
            <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={style.botonPF} src="https://i.postimg.cc/k4fy3w5R/Recurso-1pf-Boton.png" alt="Mas Preguntas" />
          </Link>
        </div>

        <div className={style.footer}>
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.imgFooter} src="https://i.postimg.cc/bJthWFst/Recurso-1footer.png" alt="Programa de Pastores" />

          <img className={style.primertexto} src='https://i.postimg.cc/SswLBVxC/Recurso-1texto-Fin1.png' />


          <div className={style.videoIns}>
            <ReactPlayer
              className={style.reactPlayer}
              url='https://youtu.be/P8ilm-t6Fl8'
              width={'100%'}
              height={'100%'}
              controls
              origin="https://www.youtube.com"
            />
          </div>


          <div className={style.mediofooter}>
            <img className={style.imgMedioFoot} src="https://i.postimg.cc/ncgjGGj8/Recurso-2mediofooter.png" alt="" />
          </div>

          <div className={style.mediotextofooter}>
            <img className={style.imgMedioFoot} src="https://i.postimg.cc/zXFDVwCS/Recurso-3mediotextofooter.png" alt="" />
          </div>

          <div className={style.contactanos}>
            <img className={style.contaImg} src="https://i.postimg.cc/FFfDrDQ8/Recurso-4contactanos.png" alt="" />
          </div>

          <div className={style.finalFooter}>
            <div className={style.mundoLineas}>
              <img className={style.finalImg} src="https://i.postimg.cc/QxRZdKfb/Recurso-5mundo.png" alt="" />

              {/* info Argentina */}
              <img className={style.infoArg} src="https://i.postimg.cc/zX6hKMMf/Recurso-8info-Arg.png" alt="infoArg" />
              <a href="https://www.instagram.com/movidaargentina/">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.igArg} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.facebook.com/movidaarg">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.fcArg} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Bolivia */}

              <img className={style.infoBol} src="https://i.postimg.cc/W1xLPqP0/Recurso-11info-Bolivia.png" alt="infoArg" />
              <a href="https://www.instagram.com/movidabolivia/">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.igBol} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.facebook.com/MOVIDABOLIVIAOFICIAL">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.fcBol} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Paraguay */}

              <img className={style.infoPar} src="https://i.postimg.cc/sgrHPPy6/Recurso-12info-Paraguay.png" alt="infoArg" />
              <a href="https://www.instagram.com/movidaparaguay/">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.igPar} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.facebook.com/MovidaPy">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.fcPar} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Uruguay */}

              <img className={style.infoUru} src="https://i.postimg.cc/VvG827RF/Recurso-13info-Uruguay.png" alt="infoArg" />
              <a href="https://www.instagram.com/movidauruguay/">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.igUru} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.facebook.com/CimaUruguay">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.fcUru} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Perú */}

              <img className={style.infoPer} src="https://i.postimg.cc/zD78Lkhj/Recurso-14info-Peru.png" alt="infoArg" />
              <a href="https://www.instagram.com/movidaperu/">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.igPer} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.facebook.com/movidaperu">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.fcPer} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Chileee */}

              <img className={style.infoChi} src="https://i.postimg.cc/7Pn0fjXW/Recurso-15info-Chile.png" alt="infoArg" />
              <a href="https://www.instagram.com/movidachile/">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.igChi} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.facebook.com/MovidaChile1">
                <motion.img
                  whileHover={{ scale: 1.1 }} className={style.fcChi} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

            </div>
          </div>
          <div className={style.linkmovidaNet}>
            <a href="https://www.movida-net.com">
              <img className={style.movidaNet} src="https://i.postimg.cc/j55tZb4x/Recurso-7movida-Net.png" alt="" />
            </a>
          </div>


        </div>
      </div>

      <a href="/inscripciones">
        <img className={style.botonFlotante} src="https://i.postimg.cc/Dz0P9Cr1/Recurso-1stikie.png" alt="" />
      </a>

    </>
  );
};

export default Landin;