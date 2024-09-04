"use client";
import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { motion, useScroll, useTransform } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Tilt } from '@jdion/tilt-react';
import { Link, useNavigate } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import style from './Landin.module.css';




const Landin = () => {


  const navigate = useNavigate();
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

  const items = [
    { title: '¿Cuándo empieza y finaliza Cima?', content: 'Se habilitará el ingreso a CIMA regional 2025 el 19 de enero a partir de las 13hs para registrarte e instalarte en el lugar, el programa inicia a las 19:00hs con la cena (Ese dia no se brinda almuerzo) Finalizamos con el desayuno el 25 de enero a las 10 hs.' },
    { title: '¿Cómo se informa la conformación de un grupo?', content: 'Uno de los integrantes del grupo debe enviar el listado con nombre, apellido y D.N.I. de todos los participante por mail o Whatsapp a la oficina de Movida del pais donde residen. Se revisará que las diez personas estén registradas, hayan señado en el tiempo correcto y no formen parte de otro grupo. Luego de eso se comunicará si se aplica o no el descuento por grupo.' },
    { title: '¿En qué moneda tengo que realizar el pago?', content: 'El valor de CIMA REGIONAL 2025 está establecido en dólares, pero la moneda de pago podes concretarla con la oficina de Movida en tu pais. En la mayoria de los casos podrás realizar tu pago en la moneda local al tipo de cambio vigente el día en que realices el pago.' },
  ];
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };


  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const handleClickImagen = (imagenSrc) => {
    setImagenSeleccionada(imagenSrc);
  };

  const handleCloseModal = () => {
    setImagenSeleccionada(null);
  };


  const goToLogin = () => {
    navigate('/login');
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
          url='https://youtu.be/P8ilm-t6Fl8'
          height="100vh"
          width="100%"
          controls
          origin="https://www.youtube.com"
        />
      </div>

      <div className={style.fondoPortada}>
        <motion.img initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }} className={style.textoInscripciones} src="https://i.postimg.cc/6pzmr5QN/Inscripcionestex-Inscrip.png" alt="Inscripciones" />
        <motion.h1 initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }} className={style.subTitulo}>¿Estas listo para el Cima 2025?</motion.h1>

        <div className={style.botones}>
          <div className={style.botonContainer}>
            <a href="/inscripciones" className={style.aStyle}>
              <motion.button
              whileHover={{ scale: 1.1 }} className={style.boton1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path d="M11.8066 23.5013C10.3965 27.6946 4.80533 27.6946 4.80533 27.6946C4.80533 27.6946 4.80533 22.1035 8.99869 20.6933" stroke="#F8F9FF" stroke-width="2.63889" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M24.3992 13.7044L16.0001 22.1035L10.3965 16.5L18.7956 8.10093C21.9747 4.92189 25.1537 4.959 26.5144 5.15692C26.7243 5.18493 26.9193 5.28126 27.069 5.43104C27.2188 5.58082 27.3151 5.77573 27.3432 5.98569C27.5411 7.34637 27.5782 10.5254 24.3992 13.7044Z" stroke="#F8F9FF" stroke-width="2.63889" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23.0013 15.1023V23.0932C22.9976 23.3542 22.8909 23.6032 22.7044 23.7859L18.709 27.7937C18.5822 27.9203 18.4235 28.0101 18.2497 28.0536C18.0759 28.097 17.8935 28.0925 17.7221 28.0404C17.5506 27.9884 17.3966 27.8907 17.2763 27.758C17.156 27.6252 17.074 27.4622 17.0391 27.2865L16 22.1036" stroke="#F8F9FF" stroke-width="2.63889" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.3978 9.49867H9.40695C9.14593 9.50238 8.89695 9.60909 8.71424 9.79554L4.70643 13.791C4.57982 13.9177 4.48999 14.0765 4.44654 14.2503C4.40309 14.4241 4.40763 14.6065 4.4597 14.7779C4.51176 14.9493 4.60939 15.1034 4.74216 15.2237C4.87493 15.344 5.03787 15.426 5.21359 15.4609L10.3965 16.5" stroke="#F8F9FF" stroke-width="2.63889" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className={style.textboton1}>Registrate aquí</h2>
              </motion.button>
            </a>
          </div>
          <div className={style.botonContainer}>
            <h1 className={style.comentario}>¿ya te inscribiste?</h1>
            <motion.button whileHover={{ scale: 1.1 }} className={style.boton2} onClick={goToLogin}>
              <h2 className={style.textboton2}>Ingresa aquí</h2>
            </motion.button>
          </div>
        </div>
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

        <div className={style.maps}>
          <h1 className={style.tituloMaps}>EL LUGAR</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5080.267595775887!2d-64.25960239464817!3d-31.372632809543752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329ec56e325f1f%3A0xb4166b54d074b369!2sComplejo%20Ferial%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1724943301434!5m2!1ses-419!2sar" 
          width="100%" height="100%"  allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

        <motion.div className={style.pfFondo}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}>
          <img className={style.pfTitulo} src="https://i.postimg.cc/L56fs0xn/Preguntas-frecuentes-Preg-Frec.png" alt="Preguntas Frecuentes" />

          {items.map((item, index) => (
            <div className={style.pfDiv} key={index}>
              <button className={style.desplegable} onClick={() => toggleVisibility(index)}>
                <h1 className={style.textDesplegable}>{item.title}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="23"
                  viewBox="0 0 38 23"
                  fill="none"
                >
                  <path
                    d="M4 4L19 19L34 4"
                    stroke="#77B178"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {visibleIndex === index && (
                <div className={style.content}>
                  {item.content}
                </div>
              )}
            </div>
          ))}

          <a className={style.buttonLink} href="/preguntasfrecuentes" target="_blank" rel="noopener noreferrer">
            <button className={style.masPreguntas} >
              <h1 className={style.textDesplegable}>Mas preguntas frecuentes</h1>
            </button>
          </a>
        </motion.div>


        <div className={style.footer}>
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.imgFooter} src="https://i.postimg.cc/bJthWFst/Recurso-1footer.png" alt="Programa de Pastores" />

          <img className={style.primertexto} src='https://i.postimg.cc/SswLBVxC/Recurso-1texto-Fin1.png' />


          <div className={style.videoIns}>
            <ReactPlayer
              className={style.reactPlayer}
              url='https://youtu.be/VY3yaF56A9A?si=l-4BsNumpgXxPUu2'
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