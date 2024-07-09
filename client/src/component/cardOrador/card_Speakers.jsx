import React from 'react';
import style from "./card_Speakers.module.css"

function card_Speakers(nombre, apellido, descripcion, ministerio, nacionalidad) {
  let urlBandera = "";
  if (nacionalidad === "Argentina") {
    urlBandera = "https://i.postimg.cc/66zgxQQm/argentina.png"
  } else if (nacionalidad === "Sudan") {
    urlBandera = "https://i.postimg.cc/28rWhzFr/sudan.png"
  } else if (nacionalidad === "Suiza") {
    urlBandera = "https://i.postimg.cc/VNQm0NnF/suiza.png"
  } else if (nacionalidad === "Estados Unidos") {
    urlBandera = "https://i.postimg.cc/4dwg0bM8/eeuu.png"
  } else if (nacionalidad === "Corea") {
    urlBandera = "https://i.postimg.cc/5y0VWQWf/corea.png"
  } else if (nacionalidad === "Mexico") {
    urlBandera = "https://i.postimg.cc/4NYg8c15/mexico.png"
  } else if (nacionalidad === "Finlandia") {
    urlBandera = "https://i.postimg.cc/wTndnBfd/finlandia.png"
  } else if (nacionalidad === "Alemania") {
    urlBandera = "https://i.postimg.cc/g2RPpPQL/alemania.png"
  } else if (nacionalidad === "Brazil") {
    urlBandera = "https://i.postimg.cc/xd2VT4Vx/brazil.png"
  } else if (nacionalidad === "Peru") {
    urlBandera = "https://i.postimg.cc/FzgJ8qvM/peru.png"
  } else if (nacionalidad === "Colombia") {
    urlBandera = "https://i.postimg.cc/gJc93LJ3/colombia.png"
  } else if (nacionalidad === "Uruguay") {
    urlBandera = "https://i.postimg.cc/0jrLBg7Q/uruguay.png"
  }
  return (

    <article className={style.card_speaker}>
      <div className={style.presentaction_speaker}>
        <h1 className={style.name_speaker}>{nombre}<br />{apellido}</h1>
        <img src={urlBandera} alt="bandera" className={style.flag} title={nacionalidad}/>
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