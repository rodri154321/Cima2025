import React, { useState, useEffect, useRef } from "react";
import style from "./cardSpoiler.module.css";

function CardSpoiler({ descripcion, nombre, url, videoId, isActive, onPlay }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isActive && videoRef.current && !isPlaying) {
      videoRef.current.play().catch((error) => {
        console.log("Reproducción automática fallida:", error);
      });
      setIsPlaying(true);
    } else if (!isActive && videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  const handleClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch((error) => {
        console.log("Reproducción manual fallida:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className={style.video_container}>
      <div className={style.titleSpoilerContainer}>
        <h1>{nombre}</h1>
      </div>
      <video
        ref={videoRef}
        className={style.video}
        controls
        controlsList="nodownload"
        onClick={handleClick}
        onTouchStart={handleClick}
      >
        <source src={url} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <p>{descripcion}</p>
    </div>
  );
}

export default CardSpoiler;
