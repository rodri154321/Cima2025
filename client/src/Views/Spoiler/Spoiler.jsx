import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import cardSpoilerData from "../../utils/datosSpoiler";
import CardSpoiler from "../../component/cardSpoiler/cardSpoiler";
import style from "./Spoiler.module.css";

const Spoiler = () => {
  const [activeVideo, setActiveVideo] = useState(null); 
  const sliderRef = useRef(null); 
  const controls = useAnimation(); 
  const earthControls = useAnimation(); 

  // Ángulos para cada uno de los 5 ítems distribuidos en 360 grados
  const directions = [
    0,        // Item 0 -> Norte
    72,       // Item 1 -> Primera dirección
    144,      // Item 2 -> Segunda dirección
    216,      // Item 3 -> Tercera dirección
    288,      // Item 4 -> Cuarta dirección
  ];

  // Función para manejar el arrastre y actualizar la rotación del planeta
  const handleDrag = (event, info) => {
    const deltaX = info.delta.x; // Cambio en la posición horizontal
    const sliderWidth = sliderRef.current.scrollWidth;
    const rotationChange = (deltaX / sliderWidth) * 360; // Rotación proporcional al desplazamiento

    // Actualizar la rotación de la imagen (planeta) en función del movimiento
    earthControls.start({
      rotate: rotationChange, 
      transition: { duration: 0.1 }, 
    });
  };

  // Función para manejar la selección de un ítem
  const handleItemClick = (index) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const itemWidth = slider.scrollWidth / cardSpoilerData.length; // Ancho de cada ítem
    const newScrollPosition = -(index * itemWidth - slider.offsetWidth / 2 + itemWidth / 2);

    // Animar el slider
    controls.start({
      x: newScrollPosition,
      transition: { duration: 0.5, ease: "easeOut" },
    });

    // Animar la rotación de la imagen a la dirección correspondiente
    earthControls.start({
      rotate: directions[index], 
      transition: { duration: 0.5, ease: "easeOut" },
    });

    // Cambiar el video activo
    setActiveVideo(index);
  };

  // Función para manejar el desplazamiento con la ruedita del ratón
  const handleWheel = (event) => {
    const sliderWidth = sliderRef.current.scrollWidth;
    const delta = event.deltaY; // Cantidad de desplazamiento de la ruedita

    // Determinar el movimiento proporcional al desplazamiento vertical
    const scrollAmount = delta * 0.1;  // Ajusta este valor para que el movimiento sea más suave
    controls.start({
      x: scrollAmount,
      transition: { duration: 0.1 },
    });

    // Actualizar la rotación del planeta de acuerdo al movimiento
    const rotationChange = (scrollAmount / sliderWidth) * 360; // Convertir desplazamiento horizontal
    earthControls.start({
      rotate: rotationChange,
      transition: { duration: 0.9 },
    });

    event.preventDefault();  // Prevenir el comportamiento predeterminado (desplazamiento de página)
  };

  // Agregar el evento `wheel` al montar el componente
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <motion.div className={style.slider_container}>
      {/* Contenedor de la imagen (globo) que rota */}
      <motion.div
        className={style.circulo}
        animate={earthControls} // Animación de la rotación
      >
        <img src="/earth.svg" alt="Earth" />
      </motion.div>

      {/* Contenedor del slider */}
      <motion.div
        ref={sliderRef}
        className={style.slider}
        drag="x" // Habilitar el arrastre horizontal
        dragConstraints={{
          right: 500,
          left: -(cardSpoilerData.length - 1) * 100, // El slider podrá moverse libremente
        }}
        animate={controls} // Animación del slider
        onDrag={handleDrag} // Actualizar la rotación del planeta mientras se arrastra
      >
        {cardSpoilerData.slice(0, 5).map((spoiler, index) => (
          <motion.div
            key={index}
            className={style.item}
            onClick={() => handleItemClick(index)} // Cambiar la dirección al hacer clic
          >
            <CardSpoiler
              nombre={spoiler.nombre}
              descripcion={spoiler.descripcion}
              url={spoiler.url}
              videoId={index}
              isActive={activeVideo === index}
              onPlay={setActiveVideo}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Spoiler;
