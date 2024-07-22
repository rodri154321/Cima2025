import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NewInscripciones.module.css"


const NewInscripciones = () => {

    const navigate = useNavigate();

    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const items = [
        { title: '¿Cuándo empieza y finaliza Cima?', content: 'Se habilitará el ingreso a CIMA regional 2025 el 19 de enero a partir de las 13hs para registrarte e instalarte en el lugar, el programa inicia a las 19:00hs con la cena (Ese dia no se brinda almuerzo) Finalizamos con el desayuno el 25 de enero a las 10 hs.' },
        { title: '¿Cómo se informa la conformación de un grupo?', content: 'Uno de los integrantes del grupo debe enviar el listado con nombre, apellido y D.N.I. de todos los participante por mail o Whatsapp a la oficina de Movida del pais donde residen. Se revisará que las diez personas estén registradas, hayan señado en el tiempo correcto y no formen parte de otro grupo. Luego de eso se comunicará si se aplica o no el descuento por grupo.' },
        { title: '¿En qué moneda tengo que realizar el pago?', content: 'El valor de CIMA REGIONAL 2025 está establecido en dólares, pero la moneda de pago podes concretarla con la oficina de Movida en tu pais. En la mayoria de los casos podrás realizar tu pago en la moneda local al tipo de cambio vigente el día en que realices el pago.' },
    ];

    const goToRegister = () => {
        navigate('/register');
      };

      const goToLogin = () => {
        navigate('/login');
      };

    return (
        <div className={style.fondo}>
            <div className={style.fondoPortada}>
                <img className={style.textoInscripciones} src="https://i.postimg.cc/6pzmr5QN/Inscripcionestex-Inscrip.png" alt="Inscripciones" />
                <h1 className={style.subTitulo}>¿Estas listo para el Cima 2025?</h1>

                <div className={style.botones}>
                    <div className={style.botonContainer}>
                        <button className={style.boton1} onClick={goToRegister}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <path d="M11.8066 23.5013C10.3965 27.6946 4.80533 27.6946 4.80533 27.6946C4.80533 27.6946 4.80533 22.1035 8.99869 20.6933" stroke="#F8F9FF" stroke-width="2.63889" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.3992 13.7044L16.0001 22.1035L10.3965 16.5L18.7956 8.10093C21.9747 4.92189 25.1537 4.959 26.5144 5.15692C26.7243 5.18493 26.9193 5.28126 27.069 5.43104C27.2188 5.58082 27.3151 5.77573 27.3432 5.98569C27.5411 7.34637 27.5782 10.5254 24.3992 13.7044Z" stroke="#F8F9FF" stroke-width="2.63889" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.0013 15.1023V23.0932C22.9976 23.3542 22.8909 23.6032 22.7044 23.7859L18.709 27.7937C18.5822 27.9203 18.4235 28.0101 18.2497 28.0536C18.0759 28.097 17.8935 28.0925 17.7221 28.0404C17.5506 27.9884 17.3966 27.8907 17.2763 27.758C17.156 27.6252 17.074 27.4622 17.0391 27.2865L16 22.1036" stroke="#F8F9FF" stroke-width="2.63889" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.3978 9.49867H9.40695C9.14593 9.50238 8.89695 9.60909 8.71424 9.79554L4.70643 13.791C4.57982 13.9177 4.48999 14.0765 4.44654 14.2503C4.40309 14.4241 4.40763 14.6065 4.4597 14.7779C4.51176 14.9493 4.60939 15.1034 4.74216 15.2237C4.87493 15.344 5.03787 15.426 5.21359 15.4609L10.3965 16.5" stroke="#F8F9FF" stroke-width="2.63889" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h2 className={style.textboton1}>Registrate aquí</h2>
                        </button>
                    </div>
                    <div className={style.botonContainer}>
                        <h1 className={style.comentario}>¿ya te inscribiste?</h1>
                        <button className={style.boton2} onClick={goToLogin}>
                            <h2 className={style.textboton2}>Ingresa aquí</h2>
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.promos}>
                <img className={style.titulo} src="https://i.postimg.cc/8zz2tBYP/Group-16conoce.png" alt="Conoce nuestras Promos" />

                <img className={style.precios} src="https://i.postimg.cc/qM6PYXXk/Group-17se-a.png" alt="seña y precios" />
            </div>
            <div className={style.importante}>
                <img className={style.tituloImportante} src="https://i.postimg.cc/3JLZgPDN/Importanteimportante.png" alt="Importante" />

                <div className={style.detalles}>
                    <div className={style.infoImoprtante}>
                        <h1 className={style.tituloII}>Acceder a precios promocionales</h1>
                        <h2 className={style.descripcionII}>Para acceder a los precios promocionales se debe abonar la seña</h2>
                    </div>
                    <div className={style.infoImoprtante}>
                        <h1 className={style.tituloII}>Valor de la seña</h1>
                        <h2 className={style.descripcionII}>La seña o adelanto tiene un valor de 25 USD. Tienes tiempo de completar el pago de tu cima hasta el 15/12/24</h2>
                    </div>
                    <div className={style.infoImoprtante}>
                        <h1 className={style.tituloII}>Precio promocional expirado</h1>
                        <h2 className={style.descripcionII}>Los que accedan a un precio promocional, deben completar su pago hasta el 15/12/24, si no lo hacen, su precio pasara a ser de 165$</h2>
                    </div>
                    <div className={style.infoImoprtante}>
                        <h1 className={style.tituloII}>Precio programa de pastores</h1>
                        <h2 className={style.descripcionII}>El precio del Programa para Pastores y Lideres es el mismo que para el resto de participantes de Cima2025</h2>
                        {/* <img className={style.fotoII} src="https://i.postimg.cc/3w7JRtCB/165-USDPreciopp.png" alt="165 usd" /> */}
                    </div>
                </div>
            </div>
            <div className={style.pfFondo}>
                <img className={style.pfTitulo} src="https://i.postimg.cc/L56fs0xn/Preguntas-frecuentes-Preg-Frec.png" alt="Preguntas Frecuentes" />

                {items.map((item, index) => (
                    <div className={style.pfDiv} key={index}>
                        <button className={style.desplegable} onClick={() => toggleVisibility(index)}>
                            <h1 className={style.textDesplegable}>{item.title}</h1>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="23"
                                viewBox="0 0 38 23"
                                fill="none"
                            >
                                <path
                                    d="M4 4L19 19L34 4"
                                    stroke="#77B178"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        {visibleIndex === index && (
                            <div className={style.content}>
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}

                <a className={style.buttonLink} href="/preguntasfrecuentes" target="_blank" rel="noopener noreferrer">
                    <button className={style.masPreguntas} >
                        <h1 className={style.textDesplegable}>Mas preguntas frecuentes</h1>
                    </button>
                </a>
            </div>

        </div>
    )

}

export default NewInscripciones;