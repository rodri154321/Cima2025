import React, { useRef, useEffect } from 'react'
import style from "./cardSpoiler.module.css"

function cardSpoiler({ descripcion, nombre, url, videoId, isActive, onPlay }) {
  const videoRef = useRef(null);

  // Pausa el video si no está activo
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]); // Dependiendo de si el video está activo

  // Maneja el evento de reproducción
  const handlePlay = () => {
    onPlay(videoId); // Notifica al padre que este video se está reproduciendo
  };

  return (
    <div className={style.video_container}>
      <h1>{nombre}</h1>
      <video
        ref={videoRef}
        className={style.video}
        controls
        onPlay={handlePlay} // Llama al padre cuando el video comienza a reproducirse
        autoPlay={isActive} // Reproduce solo si está activo
      >
        <source src={url} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <p>{descripcion}</p>
    </div>
  );
}

export default cardSpoiler;
