import React from 'react'
import RegistroFormulario from "../../component/Form/Form"
import style from "./UserSection.module.css"
function UserSection() {

  console.log(localStorage);
  console.log(localStorage.user);
  return (
    <div className={style.fondolin}>
      <div className={style.contenedor}>
        <RegistroFormulario/>
      </div>
    </div>
  )
}

export default UserSection