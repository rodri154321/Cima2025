import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='fondo1'>
        <div>
          <img className='image1' src="https://i.postimg.cc/m2dJjFN9/Logo2025.png" alt="Logo1" />
        </div>
        <h1>6 paises - 1 mision</h1>
        <div className='banderas'>
          <img className='bandera' src="https://i.postimg.cc/pTPwCN24/argentina.png" alt="Argentina" />
          <img className='bandera' src="https://i.postimg.cc/3R9PbLNR/bolivia.png" alt="Bolivia" />
          <img className='bandera' src="https://i.postimg.cc/J0n9wbHQ/chile.png" alt="Chile" />
          <img className='bandera' src="https://i.postimg.cc/hv5NKf9R/paraguay.png" alt="Paraguay" />
          <img className='bandera' src="https://i.postimg.cc/1RCkGYb7/peru.png" alt="Peru" />
          <img className='bandera' src="https://i.postimg.cc/qMN9jxTJ/uruguay.png" alt="Uruguay" />
        </div>
        <div>
          <h2>CIMA es un congreso de movilización y capacitación
            misionera juvenil que se realiza hace 35 años
            Consta de dos partes:
            </h2>
            <h1>
            DESCUBRE + EXPERIMENTA = CIMA</h1>
        </div>
      </div>

      <div className='fondo2'>
        <h1>este fondo dos</h1>
      </div>
    </>
  )
}

export default App
