import React from 'react';
import Menu from '../../../component/Menu/Menu';
import style from './DiaTres.module.css';
import CristianoGlobal from '../../../component/svgs/CristianoGlobal';
import QuePreferiz from '../../../component/QuePreferis/QuePreferis';
import Spoiler2 from '../../../Views/SpoilerD2/Spoiler';
import ReactPlayer from 'react-player';


const DiaTres = () => {
    return (
        <div className={style.container}>
            <Menu />
            {/* -----------------------------------------------------------PORTADA----------------------------------------------------------- */}
            <div className={style.videoContainer}>
                <img src="/Dia3/PortadaD3.png" alt="" />
            </div>

            {/* -----------------------------------------------------------SPOILER----------------------------------------------------------- */}

            <img className={style.imgspoiler} src="/Dia3/SpoilerDia3.png" alt="" />
            <div className={style.SpoilerContainer}>
                <Spoiler2 id='3' />
            </div>

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
                    <img className={style.imgdevo} src="/Dia3/DevocionalDia3.png" alt="titulo" />
                </div>

                <ReactPlayer url='https://vimeo.com/1049101636/d565a11ad1'

                    width='100%'
                    height='90vh'
                    controls
                />

                <img className={style.coheteDevocional} src="/Cohete.png" alt="" />
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

            {/* -----------------------------------------------------------CIMAMOMENT----------------------------------------------------------- */}
            <div className={style.experimentaContainer}>
                <a href="https://drive.google.com/drive/folders/1WUKOSC7NFsX7Pszpw1gAXlwMgiGhuvnG?usp=drive_link">
                    <img className={style.imgmerch} src="/Dia3/CimaMoment.png" alt="" />
                </a>
            </div>

            {/* -----------------------------------------------------------SIGUE----------------------------------------------------------- */}
            <div className={style.experimentaContainer}>
                <a href="https://www.canva.com/design/DAGGhylZnjE/dEuRG97TBWFhugtSjAZRAQ/view?utm_content=DAGGhylZnjE&utm_campaign=designshare&utm_medium=link&utm_source=viewer">
                    <img className={style.imgmerch} src="/Dia3/ExperimentaFoto.png" alt="" />
                </a>
            </div>


            {/* -----------------------------------------------------------MOVILIZA----------------------------------------------------------- */}
            <div className={style.movilizaContainer}>
                <img className={style.movilizarImg} src="/Dia3/Movilizar.png" alt="" />
                <h2 className={style.movilizarText}>
                    <p>Hoy, en las 5 prácticas del cristiano global, toca aprender la tercera: <span style={{ fontWeight: '1000' }}>MOVILIZAR</span></p>
                    <p><span style={{ fontWeight: '1000' }}>Un movilizador es un líder apasionado</span> por involucrar a otros en la Gran Comisión. Aunque podrían ir ellos mismos, <span style={{ fontWeight: '1000' }}>eligen usar sus talentos para movilizar a muchos hacia el campo misionero.</span> Movilizan oraciones, recursos y talentos, animando a los demás a asumir roles estratégicos como orar, enviar o invitar. Movilizar significa no sólo participar, sino ayudar a otros a cumplir su papel en la misión global de Dios.
                        Soy desafiado a: identificar a un movilizador en tu iglesia local, y agradecerle por su intencionalidad. ¿Conoces a alguien que podría ser movilizado hacia un rol estratégico en la Gran Comisión? ¿Cómo podrías animarle esta semana? ¿Cómo podrías ser movilizador?
                    </p>
                </h2>
            </div>

            {/* -----------------------------------------------------------MERCH----------------------------------------------------------- */}

                    <img className={style.imgPomo} src="https://i.postimg.cc/1zTp3n63/Imagen-de-Whats-App-2025-01-22-a-las-10-36-35-dc853ff6.jpg" alt="PROMO" />
                    <img className={style.imgPomo} src="https://i.postimg.cc/nzDqjFYY/Imagen-de-Whats-App-2025-01-22-a-las-10-36-36-aa466cdb.jpg" alt="PROMO" />
                    <img className={style.imgPomo} src="https://i.postimg.cc/0j1D7TVg/Imagen-de-Whats-App-2025-01-22-a-las-10-36-37-319f5c29.jpg" alt="PROMO" />

            {/* -----------------------------------------------------------ARTICULOS----------------------------------------------------------- */}

            <div className={style.articulosContainer} style={{marginBottom:'10%'}}>
                <h1>VER ÁRTICULOS</h1>
                <a href="./Articulo4">
                    <img className={style.imgArt} src="/Dia3/ArtLink.png" alt="" />
                </a>
            </div>



            {/* -----------------------------------------------------------MERCH----------------------------------------------------------- */}
            <ReactPlayer url='https://vimeo.com/1049263759/72303d68ba'

                    width='100%'
                    height='90vh'
                    controls
                />

            {/* -----------------------------------------------------------CIMA DAYS----------------------------------------------------------- */}
            <div style={{ width: '87%' }}>
                <img className={style.imgmerch} src="/Dia3/CimaDays.png" alt="merch" />
                <h2 className={style.cimaDayText}>
                    <p><span style={{ fontSize: 'clamp(1.2rem,1.4rem,1.6rem)' }}>¿CIMA Day?</span></p>
                    <p>
                        Durante el año Movida brinda la posibilidad a las iglesias de vivir un día de CIMA. Con ese objetivo en mente, hay dos propuestas de programas que <span style={{ fontWeight: '1000' }}>se pueden realizar en tu iglesia.</span> Aquí en los videos te contamos cuáles.
                    </p>
                </h2>
                <ReactPlayer url='https://vimeo.com/1049263868/d32b6536e0'

                    width='100%'
                    height='90vh'
                    controls
                />
            </div>
            <div style={{ width: '100%' }}>
                <img src="/Footer.png" alt="" />
            </div>
        </div>

    );
};

export default DiaTres;