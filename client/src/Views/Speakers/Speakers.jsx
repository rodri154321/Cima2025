import React from 'react'
import style from "./Speakers.module.css"

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
        <article  className={style.card_speaker}>
          <div className={style.presentaction_speaker}>
            <h1 className={style.name_speaker}>Samuel<br /> Nielsen</h1>
            <img src="https://i.postimg.cc/13SmScXJ/image.png" alt="bandera" className={style.flag} />
            <img src="https://i.postimg.cc/2SGH6rkg/Black-Teal-Modern-Shooting-Casting-Poster-1080-x-1350-px-1.png" alt="perfil_orador" />
          </div>
          <div className={style.description_speaker}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ipsa maiores ipsam quidem obcaecati. Repellat veniam aliquam atque itaque ex, impedit nulla qui aliquid! Ipsa vel dolore eligendi minus nostrum.</p>
          </div>

        </article>
      </div>
    </div>
  )
}

export default Speakers;