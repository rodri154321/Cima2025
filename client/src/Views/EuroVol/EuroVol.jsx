import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import cardSpoilerData from "../../utils/datosSpoiler";
import CardSpoiler from "../../component/cardSpoiler/cardSpoiler";
import ReactPlayer from "react-player";  // Asegúrate de tener ReactPlayer importado
import style from "./EuroVol.module.css";

const Spoiler = ({ id }) => {
  const filteredCardSpoilerData = cardSpoilerData
    .filter((spoiler) => spoiler.id == id)
    .sort((a, b) => a.pos - b.pos);

  const numCards = filteredCardSpoilerData.length;
  const initialActiveVideo = 0; // Inicializamos el video activo con el primer video

  const [activeVideo, setActiveVideo] = useState(initialActiveVideo);
  const [userInteracted, setUserInteracted] = useState(false);
  const sliderRef = useRef(null);
  const controls = useAnimation();

  const calculateItemWidth = () => {
    if (!sliderRef.current) return 0;
    const activeIndex = userInteracted ? activeVideo : initialActiveVideo;
    return sliderRef.current.offsetWidth / numCards;
  };

  const centerItem = (index) => {
    if (!sliderRef.current) return;

    const itemWidth = calculateItemWidth();
    const newScrollPosition = -(index) * itemWidth;

    controls.start({
      x: newScrollPosition,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  };

  const handlePrev = () => {
    const newIndex = activeVideo > 0 ? activeVideo - 1 : numCards - 1;
    setActiveVideo(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeVideo < numCards - 1 ? activeVideo + 1 : 0;
    setActiveVideo(newIndex);
  };

  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
    }
  };

  useEffect(() => {
    if (sliderRef.current && filteredCardSpoilerData.length > 0) {
      centerItem(initialActiveVideo); // Centrar la tarjeta activa al inicio (pos 0)
    }
  }, [filteredCardSpoilerData.length]);

  useEffect(() => {
    // Asegura que la tarjeta activa esté centrada cuando activeVideo cambie
    if (filteredCardSpoilerData.length > 0) {
      centerItem(activeVideo); // Centra la tarjeta activa al cambiar
    }
  }, [activeVideo, filteredCardSpoilerData.length]);

  return (
    <div className={style.cont_S} onClick={handleUserInteraction}>
      <motion.div className={style.slider_container}
        style={{ transform: 'translateX(87%)' }}>
        <motion.div
          ref={sliderRef}
          className={style.slider}
          animate={controls}
        >
          {filteredCardSpoilerData.length > 0 ? (
            filteredCardSpoilerData.map((spoiler, index) => (
              <motion.div key={spoiler.pos} className={style.item}>
                <CardSpoiler
                  nombre={spoiler.nombre}
                  descripcion={spoiler.descripcion}
                  videoId={spoiler.pos}
                  isActive={activeVideo === spoiler.pos}
                  url={spoiler.url}
                >
                </CardSpoiler>
              </motion.div>
            ))
          ) : (
            <p>No se encontraron videos con el id: {id}</p>
          )}
        </motion.div>
      </motion.div>

      {/* Botones de navegación */}
      <div className={style.navigation}>
        <div style={{ transform:'translateX(-125%)' }}>
          <button className={style.navButton} onClick={handlePrev}>
            &#8592;
          </button>
        </div>

        <div style={{ transform:'translateX(155%)' }}>
          <button className={style.navButton} onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spoiler;
