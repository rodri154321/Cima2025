import React, { useState } from 'react';
import style from "./card_Speakers.module.css"

function card_Speakers(foto, nombre, apellido, descripcion, ministerio, nacionalidad,index) {
  const [open,setOpen]=useState(false);

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
    urlBandera = "https://i.postimg.cc/3JLghdzW/finlandia.png"
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
  } else if (nacionalidad === "Filipina") {
    urlBandera = "https://i.postimg.cc/j2SL3hxc/Pngtree-vector-realistic-illustration-of-philippines-8650382.png"
  }

  function toggleDescription(index) {
    const description = document.getElementById(`description-${index}`);
    if (description.classList.contains(style.hidden)) {
      description.classList.remove(style.hidden);
      description.classList.add(style.visible);
      setOpen(true)
      
    } else {
      description.classList.remove(style.visible);
      description.classList.add(style.hidden);
      setOpen(false)
    }
  }

  const getBackgroundColor = (index) => {
    const colors = ['#018066', '#64B272', '#DE9204', '#0182AB'];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };
  return (

    <article className={style.card_speaker} style={{ background: getBackgroundColor(index) }}>
      <div className={style.presentaction_speaker} style={{ background: getBackgroundColor(index) }}>
        <h1 className={style.name_speaker}>{nombre}<br/>{apellido}</h1>
        <img className={style.foto} src={foto} alt="perfil_orador" />
        <img src={urlBandera} alt="bandera" className={style.flag} title={nacionalidad} />
      </div>
      <h3 className={style.ministerio}>{ministerio}</h3>
      <div className={`${style.container_btn}`}>
      <button className={`${style.btn_card_speaker}`} onClick={() => toggleDescription(index)}> <img src={open?"https://i.postimg.cc/XNxdRcYT/arriba.png":"https://i.postimg.cc/3NHh9DP1/abajo.png"}/>
        </button>
      </div>
      
  <div id={`description-${index}`} className={`${style.description_speaker} ${style.hidden}`}>
    
    <p>{descripcion}</p>
  </div>
    </article>

  )
}




export default card_Speakers