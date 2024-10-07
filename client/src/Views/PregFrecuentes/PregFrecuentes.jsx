import React, { useState } from "react";
import style from "./PregFrecuentes.module.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PregFrecuentes = () => {

    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    const items = [
        { title: '¿Cuándo empieza y finaliza Cima?', content: 'Se habilitará el ingreso a CIMA regional 2025 el 19 de enero a partir de las 13hs para registrarte e instalarte en el lugar, el programa inicia a las 19:00hs con la cena (Ese dia no se brinda almuerzo) Finalizamos con el desayuno el 25 de enero a las 10 hs.' },
        { title: '¿Cómo se informa la conformación de un grupo?', content: 'Uno de los integrantes del grupo debe enviar el listado con nombre, apellido y D.N.I. de todos los participante por mail o Whatsapp a la oficina de Movida del pais donde residen. Se revisará que las diez personas estén registradas, hayan señado en el tiempo correcto y no formen parte de otro grupo. Luego de eso se comunicará si se aplica o no el descuento por grupo.' },
        { title: '¿En qué moneda tengo que realizar el pago?', content: 'El valor de CIMA REGIONAL 2025 está establecido en dólares, pero la moneda de pago podes concretarla con la oficina de Movida en tu pais. En la mayoria de los casos podrás realizar tu pago en la moneda local al tipo de cambio vigente el día en que realices el pago.' },
        { title: '¿Cómo puedo inscribirme a CIMA 2025?', content: 'Tenes que ingresar a la web https://www.cimaregiona12025.com/ en en link inscripciones y registrar tus datos' },
        { title: '¿Cuáles son los requisitos para participar de CIMA REGIONAL 2025?', content: 'Para participar de CIMA REGIONAL 2025 debes: <br/> + Ser mayor de 15 años.<br/> +Ser miembro activo de una iglesia local.<br/> + Carta de recomendación firmada por el Pastor o líder (Nosotros te brindamos un modelo).<br/> + Completar el formulario de inscripción, aceptar los términos y condiciones del evento y realizar el/los pagos correspondientes.' },
        { title: '¿Qué incluye tu participación en CIMA 2025?', content: 'Acceso a plenarias generales, plenarias paralelas, talleres y todas las instancias de capacitación brindadas por el evento. Comidas: Cena del día 19 de enero Desayuno, almuerzo y cena del 20 al 24 de enero Desayuno del día 25 de enero Alojamiento: Desde la noche del 19 hasta la mañana del 25 de enero. Materiales: Libro de regalo, identificador, pulsera, memovida y carpeta del participante.' },
        { title: '¿Cuándo empieza y finaliza CIMA?', content: 'Se habilitará el ingreso a CIMA regional 2025 el domingo 19 de enero a partir de las 13hs para registrarte e instalarte en el lugar, el programa inicia a las 19:00hs con la cena (Ese día no se brinda almuerzo). Finalizamos con el desayuno el sábado 25 de enero a las 10 hs.' },
        { title: '¿Podré entrar y salir del predio de CIMA?', content: 'Programa general: Los asistentes a este programa no podrán salir del predio, solo excepcionalmente por motivos médicos o críticos, que deberá informar debidamente en el stand de Movida para dejar registradas tanto las salidas como los ingresos. <br /> Programa para pastores y líderes: si tendrán la posibilidad de salir del predio.' },
        { title: '¿Donde se realizará el CIMA Regional 2025?', content: 'La sede del Cima será en la ciudad de Córdoba, en el Centro de Convenciones Córdoba (Complejo Ferial Córdoba), Ramón Cárcano https://maps.app.goo.gl/uUNFqpVqrsDFA64H8' },
        { title: '¿Qué debes llevar a CIMA REGIONAL 2025?', content: '+ Biblia <br/>+ Botella de agua <br/>+ Ropa de cama o Bolsa de dormir <br/>+ Elementos de higiene personal. <br/>+Repelente y Bloqueador solar (muy importante). <br/>+Ropa cómoda para los tiempos de esparcimiento que no incomode a los demás (cuida de no usar shorts/polleras muy cortas, o remeras/musculosas muy descubiertas). <br />+ Si tomas medicamentos, no olvides llevarlos. <br /><br />  Te informamos, que nosotros te proveemos de una colchoneta de camping. (Por ello si quieres dormir más cómodo(a) puedes traer tu colchoneta inflable de 1 plaza) Nota: No traer cosas de valor que no puedas llevar junto a ti en todo momento. Ten en cuenta que en el stand de Movida tendremos material misionero, remeras y otras cositas a la venta. Para tu tranquilidad, vamos a tener un kiosco a disposición' },
        { title: 'Si pago y luego no puedo ir, ¿puedo recuperar lo que pagué?', content: '<b>Seña:</b> la seña no es reembolsable, pero sí se permite el traspaso a otra persona, el cual se debe informa antes del 15/12/2024. El traspaso sólo puede realizarse a una persona que no haya abonado la seña.<br/> <b>Valor excedente a la seña:</b> sí es reembolsable. El reembolso se realizará posterior al evento, entre el 20 y 28 de febrero de 2025, se abonará en la moneda local de cada país.' },
        { title: '¿Puedo cambiar algún dato de mi registro?', content: 'Si cometiste un error en la carga de tus datos, podés informar por mail o Whatsapp a la oficina de Movida del país donde residís.' },
        { title: '¿Quiénes pueden formar parte de los grupos?', content: 'Los integrantes de los grupos deben tener residencia en el mismo país y todos deben pagar la seña antes de la fecha del corte promocional. Los voluntarios de Movida sí pueden formar parte de los grupos. La promoción de grupos sólo aplica al programa general (el programa para pastores y líderes queda exceptuado).' },
        { title: '¿Hasta cuándo se pueden informar los grupos?', content: 'La conformación de grupos se puede informar hasta 3 días después del corte promocional.' },
        { title: 'Si un integrante del grupo no termina de pagar su participación ¿se pierde la promoción como grupo?', content: 'Sí. Para que el precio promocional se mantenga para el grupo, todos los integrantes deben completar su pago. Si una persona no completa el pago hasta el 15/12/2024, o decide no asistir al evento, todos perderán el descuento por grupo y quedarán con el precio individual correspondiente a la fecha de su seña. En el caso que un integrante del grupo no pueda asistir, puede ocupar su lugar un nuevo integrante c umpliendo los siguientes requisitos: <br/> A- Que el nuevo integrante no haya pagado la seña con anterioridad. <br/> B- Oue informe el traspaso antes del 15/12/2024.' },
        { title: '¿Hay una fecha límite para inscribirse y señar?', content: 'Las inscripciones se cerrarán cuando se completen los cupos o el 2/01/2025.' },

    ];
    return (
        <>

            <div className={style.fondo}>
                <img className={style.logo} src="https://i.postimg.cc/4NgvkSkm/Recurso-1pf-Titulo.png" alt="Preguntas Frecuentes" />
                <div className={style.promos}>
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
                                <div className={style.content} dangerouslySetInnerHTML={{ __html: item.content }}>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={style.finalFooter}>
                    <div className={style.mundoLineas}>
                        <img className={style.finalImg} src="https://i.postimg.cc/QxRZdKfb/Recurso-5mundo.png" alt="" />

                        {/* info Argentina */}
                        <img className={style.infoArg} src="https://i.postimg.cc/zX6hKMMf/Recurso-8info-Arg.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaargentina/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igArg} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/movidaarg">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcArg} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Bolivia */}

                        <img className={style.infoBol} src="https://i.postimg.cc/W1xLPqP0/Recurso-11info-Bolivia.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidabolivia/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igBol} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MOVIDABOLIVIAOFICIAL">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcBol} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Paraguay */}

                        <img className={style.infoPar} src="https://i.postimg.cc/sgrHPPy6/Recurso-12info-Paraguay.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaparaguay/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igPar} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MovidaPy">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcPar} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Uruguay */}

                        <img className={style.infoUru} src="https://i.postimg.cc/VvG827RF/Recurso-13info-Uruguay.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidauruguay/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igUru} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/CimaUruguay">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcUru} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Perú */}

                        <img className={style.infoPer} src="https://i.postimg.cc/zD78Lkhj/Recurso-14info-Peru.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaperu/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igPer} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/movidaperu">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcPer} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Chileee */}

                        <img className={style.infoChi} src="https://i.postimg.cc/7Pn0fjXW/Recurso-15info-Chile.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidachile/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igChi} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MovidaChile1">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcChi} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                    </div>
                </div>

                <div className={style.linkmovidaNet}>
                    <a href="https://www.movida-net.com">
                        <img className={style.movidaNet} src="https://i.postimg.cc/j55tZb4x/Recurso-7movida-Net.png" alt="" />
                    </a>
                </div>
            </div>


            {/* <div className={style.conteiner}>
                <img className={style.items1} src="https://i.postimg.cc/8zDVvN8N/Recurso-2pf-Titulo.png" alt="Precios" />
                <Link className={style.conteiner} to="/inscripciones">
                    <img className={style.items} src="https://i.postimg.cc/02tY3gDx/Recurso-7pf-Inscripcion.png" alt="Donde Inscribirce" />
                </Link>
                <img className={style.items} src="https://i.postimg.cc/BQvD2hyz/Recurso-8pf-Requisitos.png" alt="Requisitos" />
                <img className={style.items} src="https://i.postimg.cc/y8ZTSQ3H/Recurso-10pf-Incluye.png" alt="Incluye" />
                <img className={style.items} src="https://i.postimg.cc/JnnDj0Yk/Recurso-11pf-Empieza-Termina.png" alt="Empieza-Termina" />
                <img className={style.items} src="https://i.postimg.cc/v86qntgb/Recurso-12pf-Salir.png" alt="Se puede salir?" />
                <img className={style.items} src="https://i.postimg.cc/dtPWjZrd/Recurso-13pf-Donde.png" alt="Donde Es?" />
                <img className={style.items1} src="https://i.postimg.cc/WbG5Wpwy/Recurso-14pf-Que-Levo.png" alt="Que Llevo" />
                <img className={style.items} src="https://i.postimg.cc/W1DhpzYW/Recurso-15pf-Cuanto-Sale.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/mg0hP40b/Recurso-16pf-Moneda.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/prXLwLnB/Recurso-17pf-Recuperar.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/0QvQCfkF/Recurso-18pf-Cambiar-Dato.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/ydTNpZWd/Recurso-19pf-Formar-Grupos.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/nLBr75Jq/Recurso-20pf-Informar-Grupos.png" alt="Donde Es?" />
                <img className={style.items} src="https://i.postimg.cc/k4Y05Jps/Recurso-21pf-Hasta-Cuando.png" alt="" />
                <img className={style.items} src="https://i.postimg.cc/vTpCWPM6/Recurso-22pf-Promo-Se-Pierde.png" alt="" />
                <img className={style.items} src="https://i.postimg.cc/904vw33h/Recurso-23pf-Fin-Inscripciones.png" alt="" />
                <div className={style.finalFooter}>
                    <div className={style.mundoLineas}>
                        <img className={style.finalImg} src="https://i.postimg.cc/QxRZdKfb/Recurso-5mundo.png" alt="" />

                        {/* info Argentina 
                        <img className={style.infoArg} src="https://i.postimg.cc/zX6hKMMf/Recurso-8info-Arg.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaargentina/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igArg} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/movidaarg">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcArg} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Bolivia 

                        <img className={style.infoBol} src="https://i.postimg.cc/W1xLPqP0/Recurso-11info-Bolivia.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidabolivia/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igBol} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MOVIDABOLIVIAOFICIAL">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcBol} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Paraguay 

                        <img className={style.infoPar} src="https://i.postimg.cc/sgrHPPy6/Recurso-12info-Paraguay.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaparaguay/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igPar} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MovidaPy">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcPar} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Uruguay 

                        <img className={style.infoUru} src="https://i.postimg.cc/VvG827RF/Recurso-13info-Uruguay.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidauruguay/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igUru} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/CimaUruguay">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcUru} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Perú 

                        <img className={style.infoPer} src="https://i.postimg.cc/zD78Lkhj/Recurso-14info-Peru.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidaperu/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igPer} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/movidaperu">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcPer} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                        {/* info Chileee 

                        <img className={style.infoChi} src="https://i.postimg.cc/7Pn0fjXW/Recurso-15info-Chile.png" alt="infoArg" />
                        <a href="https://www.instagram.com/movidachile/">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.igChi} src="https://i.postimg.cc/L8f08ng3/Recurso-9ig.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/MovidaChile1">
                            <motion.img
                                whileHover={{ scale: 1.1 }} className={style.fcChi} src="https://i.postimg.cc/W4Y99rBj/Recurso-10face.png" alt="" />
                        </a>

                    </div>
                </div>

                <div className={style.linkmovidaNet}>
                    <a href="https://www.movida-net.com">
                        <img className={style.movidaNet} src="https://i.postimg.cc/j55tZb4x/Recurso-7movida-Net.png" alt="" />
                    </a>
                </div>

            </div> */}
        </>
    )
};

export default PregFrecuentes;