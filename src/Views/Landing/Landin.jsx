"use client";
import React from 'react';
import ReactPlayer from 'react-player';
import { motion, useScroll, useTransform } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from './Landin.module.css';



const Landin = () => {


  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 3], ["0%", "-400%"]);

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
          {/* Tendrás la posibilidad de capacitarte <br /> en diferentes temáticas junto a<br />
              oradores, talleristas y misioneros con<br />experiencia local y global. */}
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

        <div className={style.oradoresdiv}>

          <div className={style.divTextoOradores}>
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: -100 }} className={style.oradoresimg} src="https://i.postimg.cc/CxQgHYYL/Recurso-1-Oradores.png" alt="Oradores" />

            <motion.img initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: 100 }} className={style.textoOra}
              src="https://i.postimg.cc/B6Yqw1YW/Recurso-1texto-Oradores.png" />
          </div>

          <div className={style.imagenesOradores}>
            <div className={style.divimagenesOradores}>
              <div class={style.card}>
                <div class={style.cardinner}>
                  <div class={style.cardfront}>
                    <motion.img
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      className={style.imageneOradores} src="https://i.postimg.cc/13gjQFP3/Recurso-2-Thomas.png" alt="Thomas" />
                  </div>
                  <div class={style.cardback}>
                    <p className={style.textoTarjetaThomas}>Tienen 4 hijos adultos y 9 nietos. Ellos son los fundadores y directores internacionales de MOVIDA. Desde hace más de 35 años viven todos los dias para cumplir lo que Dios puso en sus corazones y se resume en la visión del ministerio: “Jóvenes latinos comprometidos con Dios y su misión que sirvan interculturalmente para impactar el mundo”. Junto a su familia vivieron en Chile, Argentina y Alemania; y desde hace 7 años están instalados en Walzenhausen, Suiza a dónde están levantando el trabajo de MOVIDA en Europa.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.divimagenesOradores}>
              <div class={style.card}>
                <div class={style.cardinner}>
                  <div class={style.cardfront}>
                    <motion.img
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className={style.imageneOradores} src="https://i.postimg.cc/L5HWK04c/Recurso-3-Helder.png" alt="Helder" />
                  </div>
                  <div class={style.cardback}>
                    <p className={style.textoTarjeta}>Evangelista, pastor cofundador de C29 Granada y misionero con OC-UK / SEPAL España. Máster en Interpretación bíblica por la London School of Theology. Es confundador de RedTimoteo y de la European Young Evangelists NetWork. Predica en diferentes países en español, inglés y portugués.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.divimagenesOradores}>
              <div class={style.card}>
                <div class={style.cardinner}>
                  <div class={style.cardfront}>
                    <motion.img
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className={style.imageneOradores} src="https://i.postimg.cc/dQBXmv4w/Recurso-4-Mika.png" alt="Mika" />
                  </div>
                  <div class={style.cardback}>
                    <p className={style.textoTarjeta}>
                      Pastor misionero nacido en Singapur, nieto de misioneros en China. Estudió en el Instituto Bíblico Elim, Nueva York. Ha servido en Indonesia, Canadá y Australia. Lidera una iglesia con enfoque misionero llamada Living Word International Church, que dedica ⅓  de su presupuesto anual a la misión. Está casado y tiene seis hijos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.divimagenesOradores}>
              <div class={style.card}>
                <div class={style.cardinner}>
                  <div class={style.cardfront}>
                    <motion.img
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className={style.imageneOradores} src="https://i.postimg.cc/4yBSJbmm/Recurso-5-Soon.png" alt="Soon" />
                  </div>
                  <div class={style.cardback}>
                    <p className={style.textoTarjeta}>Coreana. Misionera de largo plazo en Asia, trabajando en la plantación de iglesias y desarrollo comunitario desde 1994. Hoy es coordinadora de Wec en Argentina.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.divimagenesOradores}>
              <div class={style.card}>
                <div class={style.cardinner}>
                  <div class={style.cardfront}>
                    <motion.img
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className={style.imageneOradores} src="https://i.postimg.cc/Wb1y5KHr/Recurso-7-Rafael.png" alt="Rafael" />
                  </div>
                  <div class={style.cardback}>
                    <p className={style.textoTarjeta}>Rafael es casado con su esposa Xochitl desde 1987, y siempre han servido juntos en el ministerio. Rafael y Xochitl tienen una sola hija, Nayeli, quien terminó su maestría en misiones en el Seminario Fuller, en Pasadena, CA, y ella, junto a su esposo e hijos han servido como misioneros en el Sudeste de Asia.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.divimagenesOradores}>
              <div class={style.card}>
                <div class={style.cardinner}>
                  <div class={style.cardfront}>
                    <motion.img
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className={style.imageneOradores} src="https://i.postimg.cc/J4Y2vqfF/Recurso-6-Hebert.png" alt="Hebert" />
                  </div>
                  <div class={style.cardback}>
                    <p className={style.textoTarjeta}>info detallada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className={style.textoOr}>TOCA LA IMAGEN DE LOS ORADORES Y DESCUBRI MAS INFORMACION DE ELLOS</h1>

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
              <Carousel showStatus={false}
                showIndicators={false} showThumbs={false} centerMode centerSlidePercentage={60} swipeable={true} autoPlay >
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/kXzDdLZp/CIMA-2024-102.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/6QN38nBV/CIMA-2024-109.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/L408zrH8/CIMA-2024-113.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/QtfxYz1S/CIMA-2024-131.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/J0t7fQQ8/CIMA-2024-138.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/jjQjP2jp/CIMA-2024-140.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/x87jnbsz/CIMA-2024-176.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/PrprK2xz/CIMA-2024-179.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/Qx2Nz1KL/CIMA-2024-184.jpg" alt="" />
                </div>
              </Carousel>
            </div>
          </div>

        </div>

        <div className={style.divProg}>

          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.imgProg} src="https://i.postimg.cc/KY2ZPwwM/Recurso-2programa-Pastores.png" alt="Programa de Pastores" />

          <div className={style.ubiCarusel}>


            <div className={style.CaruselPpP}>
              <Carousel showStatus={false}
                showIndicators={false} showThumbs={false} centerMode centerSlidePercentage={60} swipeable={true} autoPlay >
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/7L51XZXh/CIMA-2024-101.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/5tDBrWk3/CIMA-2024-102.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/c1RRFj7R/CIMA-2024-103.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/J0Lb1c8H/CIMA-2024-104.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/d3jGDkQH/CIMA-2024-105.jpg" alt="" />
                </div>
                <div>
                  <img className={style.imgCarucel} src="https://i.postimg.cc/xCHvDpwS/CIMA-2024-106.jpg" alt="" />
                </div>
              </Carousel>
            </div>
            <div className={style.divPpPtexto}>
              <motion.img
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }} className={style.textoProg}
                src='https://i.postimg.cc/t4bS1vkT/Recurso-2texto-Prog-Pastores.png' />
            </div>
          </div>
        </div>

        <div className={style.footer}>
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} className={style.imgFooter} src="https://i.postimg.cc/bJthWFst/Recurso-1footer.png" alt="Programa de Pastores" />

          <img className={style.primertexto} src='https://i.postimg.cc/SswLBVxC/Recurso-1texto-Fin1.png' />

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
              <a href="https://www.movida-net.com">
                <img className={style.igArg} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.movida-net.com">
                <img className={style.fcArg} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Bolivia */}

              <img className={style.infoBol} src="https://i.postimg.cc/W1xLPqP0/Recurso-11info-Bolivia.png" alt="infoArg" />
              <a href="https://www.movida-net.com">
                <img className={style.igBol} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.movida-net.com">
                <img className={style.fcBol} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Paraguay */}

              <img className={style.infoPar} src="https://i.postimg.cc/sgrHPPy6/Recurso-12info-Paraguay.png" alt="infoArg" />
              <a href="https://www.movida-net.com">
                <img className={style.igPar} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.movida-net.com">
                <img className={style.fcPar} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Uruguay */}

              <img className={style.infoUru} src="https://i.postimg.cc/VvG827RF/Recurso-13info-Uruguay.png" alt="infoArg" />
              <a href="https://www.movida-net.com">
                <img className={style.igUru} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.movida-net.com">
                <img className={style.fcUru} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Perú */}

              <img className={style.infoPer} src="https://i.postimg.cc/zD78Lkhj/Recurso-14info-Peru.png" alt="infoArg" />
              <a href="https://www.movida-net.com">
                <img className={style.igPer} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.movida-net.com">
                <img className={style.fcPer} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
              </a>

              {/* info Chile */}

              <img className={style.infoChi} src="https://i.postimg.cc/7Pn0fjXW/Recurso-15info-Chile.png" alt="infoArg" />
              <a href="https://www.movida-net.com">
                <img className={style.igChi} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
              </a>
              <a href="https://www.movida-net.com">
                <img className={style.fcChi} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
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
    </>
  );
};

export default Landin;