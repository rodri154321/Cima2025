import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import cardSpoilerData from "../../utils/datosSpoiler";
import CardSpoiler from "../../component/cardSpoiler/cardSpoiler";
import style from "./Spoiler.module.css";

const Spoiler = ({ id }) => {
  // Filtrar los videos que coincidan con el id recibido
  const filteredCardSpoilerData = cardSpoilerData.filter((spoiler) => spoiler.id == id);

  const numCards = filteredCardSpoilerData.length;
  const initialActiveVideo = Math.floor(numCards / 2); // Centro inicial basado en el número de tarjetas

  const [activeVideo, setActiveVideo] = useState(initialActiveVideo);
  const [userInteracted, setUserInteracted] = useState(false);
  const sliderRef = useRef(null);
  const controls = useAnimation();

  const centerItem = (index) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const itemWidth = slider.scrollWidth / numCards;  // Asegura que el cálculo se haga dinámicamente
    const newScrollPosition = -(index * itemWidth - slider.offsetWidth / 2 + itemWidth / 2);

    controls.start({
      x: newScrollPosition,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  };

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const threshold = 100;

    if (offset < -threshold) {
      handleNext();
    } else if (offset > threshold) {
      handlePrev();
    } else {
      centerItem(activeVideo);
    }
  };

  const handlePrev = () => {
    const newIndex = activeVideo > 0 ? activeVideo - 1 : numCards - 1;
    setActiveVideo(newIndex);
    centerItem(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeVideo < numCards - 1 ? activeVideo + 1 : 0;
    setActiveVideo(newIndex);
    centerItem(newIndex);
  };

  const handleUserInteraction = () => {
    if (!userInteracted) {
      setUserInteracted(true);
    }
  };

  useEffect(() => {
    centerItem(activeVideo);
    if (userInteracted && sliderRef.current) {
      const videoElement = sliderRef.current.children[activeVideo].querySelector("video");
      if (videoElement) {
        videoElement.play().catch((error) => {});
      }
    }
  }, [activeVideo, userInteracted]);

  useEffect(() => {
    if (userInteracted) {
      const videoElement = sliderRef.current.children[activeVideo].querySelector("video");
      if (videoElement) {
        videoElement.play().catch((error) => {});
      }
    }
  }, [userInteracted, activeVideo]);

  return (
    <div className={style.cont_S} onClick={handleUserInteraction}>
      <motion.div className={style.slider_container}>
        <motion.div
          ref={sliderRef}
          className={style.slider}
          animate={controls}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {filteredCardSpoilerData.length > 0 ? (
            filteredCardSpoilerData.map((spoiler, index) => (
              <motion.div key={index} className={style.item}>
                <CardSpoiler
                  nombre={spoiler.nombre}
                  descripcion={spoiler.descripcion}
                  url={spoiler.url}
                  videoId={index}
                  isActive={activeVideo === index}
                  onPlay={setActiveVideo}
                />
              </motion.div>
            ))
          ) : (
            <p>No se encontraron videos con el id: {id}</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Spoiler;
