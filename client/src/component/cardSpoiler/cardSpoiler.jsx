import React, { useState, useRef, useEffect } from "react";
import style from "./cardSpoiler.module.css";
import ReactPlayer from "react-player";

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
    <div className={style.video_container} onClick={handleClick}>
      <div className={style.titleSpoilerContainer}>
        <h1>{nombre}</h1>
      </div>

      <ReactPlayer
        className={style.video}
        url={url}
        width="100%"
        height="60vh"
        style={{ paddingTop: "10%" }}
        controls
      />
      <p>{descripcion}</p>
    </div>
  );
}

export default CardSpoiler;
