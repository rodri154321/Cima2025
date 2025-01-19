import React from 'react';
import { useNavigate } from 'react-router-dom';
import titulo from '../../assets/TITULOCARPETADIGITAL.webp';
import style from './CarpetaParticipante.module.css';
import styladed from "../../assets/fondo1.webp"

const CarpetaParticipante = () => {

    const navigate = useNavigate();

    const route1 = () => {
        navigate('/carpetaparticipante/descprogact');
    };
    const route2 = () => {
        navigate('/carpetaparticipante/operacioncima');
    };

    const route3 = () => {
        navigate('/carpetaparticipante/tiendamovida');
    };

    const route4 = () => {
        navigate('/carpetaparticipante/experimenta');
    };

    const route5 = () => {
        navigate('/carpetaparticipante/programapastores');
    };

    const route6 = () => {
        navigate('/carpetaparticipante/oradores');
    };

    const route7 = () => {
        navigate('/carpetaparticipante/devocionalesygrupospequeños');
    };

    const route8 = () => {
        navigate('/carpetaparticipante/plenariasgenerales');
    };

    const route9 = () => {
        navigate('/carpetaparticipante/vueltaacasa');
    };

    const route10 = () => {
        navigate('/carpetaparticipante/atencionmedica');
    };

    const route11 = () => {
        navigate('/carpetaparticipante/movida');
    };

    const route12 = () => {
        navigate('/carpetaparticipante/devocionalesexperimenta');
    };


    return (
        <div className={style.container}>
            <img className={style.titulo} src={titulo} alt="Titulo" />

            <button onClick={route1} className={style.button}>DESCRIPCIONES,
                PROGAMAS Y ACTIVIDADES</button>
            <button onClick={route11} className={style.button}>MOVIDA</button>
            <button onClick={route2} className={style.button}>OPERACIÓN CIMA</button>
            <button onClick={route3} className={style.button}>TIENDA MOVIDA</button>
            <button onClick={route4} className={style.button}>EXPERIMENTA</button>
            <button onClick={route5} className={style.button}>PROGRAMA PARA PASTORES Y LÍDERES</button>
            <button onClick={route6} className={style.button}>ORADORES</button>
            <button onClick={route7} className={style.button}>DEVOCIONALES
                Y GRUPOS PEQUEÑOS</button>
            <button onClick={route8} className={style.button}>PLENARIAS GENERALES, PARALELAS,
                TALLERES Y CIMA TALKS</button>
            <button onClick={route9} className={style.button}>VUELTA A CASA</button>
            <button onClick={route10} className={style.button}>ATENCION MÉDICA</button>
            <button onClick={route12} className={style.button}>DEVOCIONALES EXPERIMENTA</button>

            <div className={style.containerDescargas}>
                <button className={style.buttonDescarga}><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_85)">
                        <path d="M22.1357 46.2202L32.8476 56.9321M32.8476 56.9321L43.5595 46.2202M32.8476 56.9321V32.8304M56.6279 49.1392C58.9562 47.502 60.7021 45.1655 61.6124 42.4688C62.5227 39.7721 62.55 36.8554 61.6904 34.1421C60.8307 31.4289 59.1288 29.0601 56.8317 27.3796C54.5345 25.6991 51.7616 24.7943 48.9154 24.7965H45.5412C44.7357 21.6576 43.2287 18.7423 41.1336 16.2701C39.0384 13.7979 36.4097 11.8332 33.4454 10.5239C30.481 9.21462 27.2583 8.59489 24.0198 8.71135C20.7812 8.82781 17.6114 9.67744 14.7487 11.1963C11.8861 12.7151 9.40529 14.8635 7.49312 17.4798C5.58096 20.0962 4.28724 23.1122 3.70935 26.3009C3.13147 29.4895 3.28449 32.7677 4.15689 35.8887C5.02929 39.0097 6.59834 41.8921 8.74591 44.3189" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_85">
                            <rect width="64.2712" height="64.2712" fill="white" transform="translate(0.711914 0.694824)" />
                        </clipPath>
                    </defs>
                </svg>
                    Devocionales experimenta
                </button>
            </div>

        </div>
    );
};

export default CarpetaParticipante;