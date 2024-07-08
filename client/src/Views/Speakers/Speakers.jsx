import React from 'react'
import style from "./Speakers.module.css"
import oradores from "../../utils/datosOradores"
import cardSpeakers from "../../component/cardOrador/card_Speakers"

function Speakers() {
  return (
    <div className={style.container_speakers}>
      <img src="https://i.postimg.cc/sfH5Hxnn/Recurso-24.png" alt="detalle_fondo" className={style.detalle_fondo1} />
      <img src="https://i.postimg.cc/jSPNjXR9/Recurso-25.png" alt="detalle_fondo_onda" className={style.detalle_fondo2} />

      <img className={style.banner_sup} src="https://i.postimg.cc/7L1gKNc7/banner-oradores.png" alt="Inscripciones" />
      <div className={style.banner_sup}>
        <h3><strong>Oradores 2025</strong> </h3>
        <p>Cumple tu destino</p>
      </div>

      <div className={style.cards_speaker}>
        {oradores.map((orador, index) => (
          <div key={index} className={style.orador_card}>
            {cardSpeakers(orador.nombre, orador.descripcion, orador.ministerio)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Speakers;