import React from 'react'
import RegistroFormulario from "../../Component/Form/Form"
import style from "./UserSection.module.css"
function UserSection() {
  return (
    <div className={style.fondolin}>
      <div className={style.contenedorViews}>
        <RegistroFormulario/>
      </div>
    </div>
  )
}

export default UserSection