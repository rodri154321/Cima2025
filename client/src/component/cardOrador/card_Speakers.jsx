import React from 'react';
import style from "./card_Speakers.module.css"

function card_Speakers(nombre,descripcion,ministerio) {
  return (
   
    <article  className={style.card_speaker}>
      <div className={style.presentaction_speaker}>
        <h1 className={style.name_speaker}>{nombre}</h1>
        <img src="https://i.postimg.cc/13SmScXJ/image.png" alt="bandera" className={style.flag} />
        <img src="https://i.postimg.cc/2SGH6rkg/Black-Teal-Modern-Shooting-Casting-Poster-1080-x-1350-px-1.png" alt="perfil_orador" />
      </div>
      <h3>{ministerio}</h3>
      <div className={style.description_speaker}>
        <p>{descripcion}</p>
      </div>

    </article>
  
  )
}

export default card_Speakers