import React, { useState } from "react"
import style from "./Speakers.module.css"
import oradores from "../../utils/datosOradores"
import CardSpeakers from "../../component/cardOrador/card_Speakers"

function Speakers() {
  const oradoresPorPagina = 16;
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(oradores.length / oradoresPorPagina);

  function pagAnterior() {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  }

  function pagSiguiente() {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  }

  const oradoresPaginados = oradores.slice(
    (paginaActual - 1) * oradoresPorPagina,
    paginaActual * oradoresPorPagina
  );

  console.log(`Página actual: ${paginaActual}`);
  console.log(`Total de páginas: ${totalPaginas}`);
  console.log(`Oradores paginados:`, oradoresPaginados);

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
        <h3>Oradores 2025</h3>
        <h4>Cumple tu destino</h4>
      </div>
      <div className={style.cards_speaker}>
        {oradoresPaginados.map((orador, index) => (
          <div key={index} className={style.orador_card}>
            <CardSpeakers
              foto={orador.foto}
              nombre={orador.nombre}
              apellido={orador.apellido}
              descripcion={orador.descripcion}
              ministerio={orador.ministerio}
              nacionalidad={orador.nacionalidad}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className={style.container_btn}>
        <img src="https://i.postimg.cc/6p1zM7Yd/Recurso-26.png" alt="detalle_fondo" className={style.detalle_fondo3} />
        <img src="https://i.postimg.cc/fbzZfrq3/Recurso-5-Promos.png" alt="detalle_fondo" className={style.detalle_fondo4} />
        <button onClick={pagAnterior}>{"<"}</button>
        <div className={style.container_pag_btn}>
          {[...Array(totalPaginas)].map((_, i) => (
            <button key={i} onClick={() => setPaginaActual(i + 1)}>{i + 1}</button>
          ))}
        </div>
        <button onClick={pagSiguiente}>{">"}</button>
      </div>
    </div>
  );
}

export default Speakers;
