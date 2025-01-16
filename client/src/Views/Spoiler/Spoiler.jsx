import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import cardSpoilerData from "../../utils/datosSpoiler";
import CardSpoiler from "../../component/cardSpoiler/cardSpoiler";
import style from "./Spoiler.module.css";

const Spoiler = () => {
  const [activeVideo, setActiveVideo] = useState(null); // Estado para controlar el video activo
  const sliderRef = useRef(null); // Referencia al contenedor del slider
  const controls = useAnimation(); // Controlador para la animación del slider
  const earthControls = useAnimation(); // Controlador para la animación de la tierra

  const handleDrag = (event, info) => {
    const deltaX = info.delta.x; // Cambio en la posición horizontal
    const rotationChange = deltaX * 0.1; // Ajusta el valor para controlar la rotación
    earthControls.start({
      rotate: `+=${rotationChange}`, // Incrementa o decrementa la rotación
      transition: { duration: 0.1 }, // Suavidad en la animación
    });
  };

  const handleItemClick = (index) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current; // Contenedor del slider
    const itemWidth = slider.scrollWidth / cardSpoilerData.length; // Ancho de un ítem
    const newScrollPosition =
      -(index * itemWidth - slider.offsetWidth / 2 + itemWidth / 2);

    // Animar la posición del slider
    controls.start({
      x: newScrollPosition,
      transition: { duration: 0.5, ease: "easeOut" },
    });

    // Cambiar el video activo
    setActiveVideo(index); // Actualiza el estado para indicar qué video se está reproduciendo
  };

  return (
    <motion.div className={style.slider_container}>
      {/* <motion.div
        className={style.circulo}
        animate={earthControls} // Vincula la animación de rotación
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <img src="../../../earth.svg" alt="Earth" />
      </motion.div> */}
      <motion.div
        ref={sliderRef}
        className={style.slider}
        drag="x"
        dragConstraints={{
          right: 600,
          left: -(cardSpoilerData.length - 1) * 200,
        }}
        animate={controls}
        onDrag={handleDrag} // Maneja el evento de arrastre
      >
        {cardSpoilerData.map((spoiler, index) => (
          <motion.div
            key={index}
            className={style.item}
            onClick={() => handleItemClick(index)}
          >
            <CardSpoiler
              nombre={spoiler.nombre}
              descripcion={spoiler.descripcion}
              url={spoiler.url}
              videoId={index}
              isActive={activeVideo === index} // Indica si este video es el activo
              onPlay={setActiveVideo} // Función para actualizar el video activo
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Spoiler;
