import React from 'react';
import Menu from '../../../component/Menu/Menu';
import style from './DiaCuatro.module.css';
import CristianoGlobal from '../../../component/svgs/CristianoGlobal';
import QuePreferiz from '../../../component/QuePreferis/QuePreferis';
import Spoiler2 from '../../../Views/SpoilerD2/Spoiler';
import ReactPlayer from 'react-player';


const DiaCuatro = () => {
    return (
        <div className={style.container}>
            <Menu />
            {/* -----------------------------------------------------------OPERACION CIMA------------------------------------------------------ */}
            <div className={style.operacionCimaContainer}>
                <img className={style.imgOperacionCima} src="/Dia3/OperacionCima.png" alt="" />
                <ReactPlayer url='https://vimeo.com/1049103052/57711a8a9a'

                    width='100%'
                    height='90vh'
                    controls
                />
            </div>

            {/* -----------------------------------------------------------DEVOCIONAL----------------------------------------------------------- */}

            <div className={style.devocionalContainer}>

                <div className={style.devocionalTitle2}>
                    <img className={style.imgdevo} src="https://i.postimg.cc/CLnywNLf/Devocional.png" alt="titulo" />
                </div>

                <ReactPlayer url='https://vimeo.com/1049101636/d565a11ad1'

                    width='100%'
                    height='90vh'
                    controls
                />

                <img className={style.coheteDevocional} src="/Cohete.png" alt="" />
                <img className={style.circulosDevocional} src="/Circulos.png" alt="" />
            </div>

            {/* -----------------------------------------------------------SPOILER----------------------------------------------------------- */}

            <img className={style.imgspoiler} src="/SPOILER_Dia2.png" alt="" />
            <div className={style.SpoilerContainer}>
                <Spoiler2 id='3' />
            </div>

            {/* -----------------------------------------------------------CIMAMOMENT----------------------------------------------------------- */}
                        <div className={style.experimentaContainer}>
                            <a href="https://drive.google.com/drive/folders/1WUKOSC7NFsX7Pszpw1gAXlwMgiGhuvnG?usp=drive_link">
                                <img className={style.imgmerch} src="https://i.postimg.cc/P5j6Fncq/image-3504.png" alt="" />
                            </a>
                        </div>

            {/* -----------------------------------------------------------RETO CIMEÑO----------------------------------------------------------- */}

            <div className={style.EncuestaContainer}>
                <img className={style.retoImg} src="/RetoCimeno.png" alt="" />
                <ReactPlayer url='https://vimeo.com/1049266700/0154500231'

                    width='100%'
                    height='90vh'
                    controls
                />
                <img className={style.rexReto} src="/CimaRex.png" alt="" />
            </div>

            {/* -----------------------------------------------------------ENVIAR----------------------------------------------------------- */}
            <div className={style.movilizaContainer}>
                <img className={style.movilizarImg} src="https://i.postimg.cc/mkDs3Wsd/Enviar.png" alt="" />
                <h2 className={style.movilizarText}>
                    <p><span style={{ fontWeight: '1000', fontSize: 'clamp(1.3rem,1.4rem,1.9rem)' }}>¿Cuántos más van a esperar?</span></p>
                    <p><span style={{ fontWeight: '1000' }}>Ser "el que envía"</span> también es fundamental en la práctica del cristiano global. Son personas que <span style={{ fontWeight: '1000', color: 'white', backgroundColor: '#E29400' }}>saben administrar recursos y ponen en marcha planes para apoyar a los que están saliendo al campo misionero.</span> Su contribución va más allá del dinero, incluyendo tecnología, logística y otros medios. ‘El que envía’ entiende que está íntimamente involucrado en la misión y comprende que su apoyo es vital para avanzar en el propósito de Dios.
                        <span style={{ fontWeight: '1000' }}>Soy desafiado a:</span> ¿qué recursos tienes (financieros, tecnológicos o habilidades) que podrías ofrecer para apoyar a quienes están en la misión? ¿Sabes si tu iglesia está apoyando a algún misionero que esté por salir o ya esté en el campo? <span style={{ color: '#E98900', fontWeight: '1000' }}>¡Tú puedes ser la respuesta a la oración de muchos que quieren ir, pero necesitan ser enviados!</span></p>
                </h2>
                <div style={{ position: 'absolute', transform: 'translateY(-350%) translateX(230%)' }}>
                    <svg width="97" height="47" viewBox="0 0 97 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.39717 10.8402C4.42909 4.8533 10.1189 0.836534 16.1058 1.86845L86.074 13.9285C92.0609 14.9604 96.0776 20.6502 95.0457 26.6371L93.517 35.5063C92.4851 41.4931 86.7952 45.5099 80.8084 44.478L10.8401 32.418C4.85329 31.3861 0.836525 25.6962 1.86844 19.7094L3.39717 10.8402Z" fill="#008066" />
                        <g clip-path="url(#clip0_2239_44)">
                            <path d="M13.0298 27.7747L9.11033 27.0991L11.1729 17.3072L14.3644 17.8573L13.0298 27.7747ZM13.5793 12.8788C14.0926 12.9673 14.5122 13.2366 14.8382 13.6868C15.1697 14.1331 15.2907 14.6296 15.2013 15.1764C15.1049 15.7075 14.8259 16.1279 14.3641 16.4374C13.907 16.7478 13.4219 16.8588 12.9086 16.7703C12.3673 16.677 11.9356 16.408 11.6135 15.9633C11.296 15.5194 11.1855 15.0319 11.2818 14.5008C11.3399 14.136 11.4829 13.822 11.7109 13.5586C11.9397 13.2905 12.2183 13.0959 12.5466 12.9747C12.8758 12.8489 13.2201 12.8169 13.5793 12.8788ZM16.123 24.589L18.5936 10.2549L28.9243 12.0356L28.3838 15.1711L21.9447 14.0613L21.52 16.5249L27.4272 17.5431L26.8868 20.6787L20.9796 19.6605L20.5549 22.1242L26.9661 23.2292L26.4256 26.3648L16.123 24.589ZM43.2566 14.5059L40.7859 28.84L37.5384 28.2803L33.6571 19.8565L33.5731 19.8421L32.2751 27.3731L28.3836 26.7023L30.8543 12.3682L34.1578 12.9376L37.9599 21.3189L38.0719 21.3382L39.3651 13.8352L43.2566 14.5059ZM49.0168 15.4988L50.2144 26.1121L50.3264 26.1314L55.008 16.5315L59.4034 17.2891L52.2014 30.8076L46.8821 29.8908L44.6214 14.7412L49.0168 15.4988ZM64.6755 18.1978L62.2048 32.5319L58.3133 31.8611L60.784 17.527L64.6755 18.1978ZM67.7726 33.4916L63.5731 32.7677L70.7752 19.2492L76.0945 20.166L78.3552 35.3156L74.1557 34.5918L72.8104 23.6647L72.6984 23.6454L67.7726 33.4916ZM67.9634 27.7012L75.8584 29.062L75.3565 31.9736L67.4616 30.6128L67.9634 27.7012ZM86.7418 22.0012L84.6793 31.7932L81.4877 31.2431L82.8223 21.3256L86.7418 22.0012ZM82.2728 36.2215C81.7315 36.1282 81.2998 35.8592 80.9777 35.4145C80.661 34.9659 80.5521 34.4691 80.6508 33.924C80.7378 33.3912 81.0052 32.9689 81.453 32.6569C81.9054 32.3457 82.4023 32.2367 82.9435 32.33C83.4568 32.4185 83.8768 32.6855 84.2036 33.131C84.5351 33.5773 84.6573 34.0668 84.5703 34.5995C84.5029 34.9627 84.3501 35.2775 84.112 35.5439C83.8794 35.8065 83.6008 36.0012 83.2763 36.1278C82.9526 36.2498 82.6181 36.281 82.2728 36.2215Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2239_44">
                                <rect width="83.4206" height="27.8475" fill="white" transform="translate(8.41333 2.14209) rotate(9.77963)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* -----------------------------------------------------------MERCH----------------------------------------------------------- */}
            <div className={style.experimentaContainer}>
                <a href="./Merch">
                    <img className={style.imgmerch} src="https://i.postimg.cc/9Qd6sQJ4/PromoD4.png" alt="" />
                </a>
                <img style={{ transform: 'translateY(50%) translateX(7%)' }} src="https://i.postimg.cc/vT3mMvQK/Merch.png" alt="PROMO" />
                <div>
                    <img className={style.imgPomo} src="https://i.postimg.cc/1zTp3n63/Imagen-de-Whats-App-2025-01-22-a-las-10-36-35-dc853ff6.jpg" alt="PROMO" />
                    <img className={style.imgPomo} src="https://i.postimg.cc/nzDqjFYY/Imagen-de-Whats-App-2025-01-22-a-las-10-36-36-aa466cdb.jpg" alt="PROMO" />
                    <img className={style.imgPomo} src="https://i.postimg.cc/0j1D7TVg/Imagen-de-Whats-App-2025-01-22-a-las-10-36-37-319f5c29.jpg" alt="PROMO" />
                </div>
            </div>

            {/* -----------------------------------------------------------ARTICULOS----------------------------------------------------------- */}

            <div className={style.articulosContainer} style={{ marginBottom: '10%' }}>
                <h1>VER ÁRTICULOS</h1>
                <a href="./Articulo7">
                    <img className={style.imgArt} src="https://i.postimg.cc/T1vmYfnL/Frame-20.png" alt="" />
                </a>
            </div>
        </div>

    );
};

export default DiaCuatro;