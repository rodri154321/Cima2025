import React, { useState } from "react"
import style from "./Speakers.module.css"
import oradores from "../../utils/datosOradores"
import cardSpeakers from "../../component/cardOrador/card_Speakers"

function Speakers() {

  const oradoresPorPagina = 16;
  const [paginaActual, setPaginaActual] = useState(1);

  // Divide los oradores en páginas

  function pagAnterior(){
    if(paginaActual >1)
    setPaginaActual(paginaActual-1)
  }
  function pagSiguiente(){
    if(paginaActual <4)
    setPaginaActual(paginaActual+1)
  }
  const oradoresPaginados = oradores.slice(
    (paginaActual - 1) * oradoresPorPagina,
    paginaActual * oradoresPorPagina
  );
  return (
    <div className={style.container_speakers}>
      <div className={style.cont_bann}>
      <img src="https://i.postimg.cc/sfH5Hxnn/Recurso-24.png" alt="detalle_fondo" className={style.detalle_fondo1} />
      <img src="https://i.postimg.cc/jSPNjXR9/Recurso-25.png" alt="detalle_fondo" className={style.detalle_fondo2} />
      <img className={style.banner_sup} src="https://i.postimg.cc/7L1gKNc7/banner-oradores.png" alt="Inscripciones" />
      </div>
      <div className={style.cont_bann_resp}>
        <img className={style.banner_sup_resp} src="https://i.postimg.cc/tTmr72Mn/responsive-oradores.png" alt="Inscripciones" />
      </div>
      <div className={style.title_speaker}>
        <h3 >Oradores 2025</h3>
        <h4>Cumple tu destino</h4>
      </div>

      <div className={style.cards_speaker}>
        {oradoresPaginados.map((orador, index) => (
          <div key={index} className={style.orador_card}>
            {cardSpeakers(orador.nombre,orador.apellido, orador.descripcion, orador.ministerio,orador.nacionalidad,index)}
          </div>
        ))}
      </div>
      <div className={style.container_btn}>
      <img src="https://i.postimg.cc/6p1zM7Yd/Recurso-26.png" alt="detalle_fondo" className={style.detalle_fondo3}/>
      <img src="https://i.postimg.cc/fbzZfrq3/Recurso-5-Promos.png" alt="detalle_fondo" className={style.detalle_fondo4}/>
        <button onClick={pagAnterior}>{"<"}</button>
        <div className={style.container_pag_btn}>
          <button onClick={() => setPaginaActual(1)}>1</button>
          <button onClick={() => setPaginaActual(2)}>2</button>
          <button onClick={() => setPaginaActual(3)}>3</button>
          <button onClick={() => setPaginaActual(4)}>4</button>
        </div>
        <button onClick={pagSiguiente}>{">"}</button>
      </div>
    </div>
  )
}

export default Speakers;