import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import style from "./FormExperimenta.module.css";
import getInfo from "../../utils/getInfo"


function FormExperimenta() {

    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const userObject = JSON.parse(userString);
    const emailGoogle = userObject.emailGoogle;

    const [form, setForm] = useState({
        emailGoogle,
        experimenta1: "",
        experimenta2: "",
        otroExperimenta: false,
        añoOtroExperimenta: null,
        aceptoTerminos: false,
    });

    const [selectState, setSelectState] = useState({
        experimenta1Enabled: false,
        experimenta2Enabled: true,
    });

    useEffect(() => {
        if (userObject.experimenta == null) {
            // if (userObject.montoPagado && userObject.montoPagado > 0 && userObject.experimenta == null) {
            setForm({ ...form, emailGoogle: emailGoogle })
        } else {
            navigate('/dashboardexperimenta')
        }
    }, [navigate]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setForm((prevForm) => {
            if (name === 'otroExperimenta' && !checked) {
                return {
                    ...prevForm,
                    [name]: checked,
                    añoOtroExperimenta: null,
                };
            }
            return {
                ...prevForm,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
        console.log(form);
    };

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            experimenta: value,
            [name]: value,
        }));
        console.log(form);
    };

    const handleSelectToggle = (selectName) => {
        setSelectState((prevState) => ({
            experimenta1Enabled: selectName === 'experimenta1' ? true : false,
            experimenta2Enabled: selectName === 'experimenta2' ? true : false,
        }));
        setForm((prevForm) => ({
            ...prevForm,
            experimenta1: selectName === 'experimenta1' ? prevForm.experimenta1 : "",
            experimenta2: selectName === 'experimenta2' ? prevForm.experimenta2 : "",
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Construir el cuerpo de la solicitud
        const formData = {
            emailGoogle: form.emailGoogle,
            experimenta: form.experimenta1 || form.experimenta2,
            otroExperimenta: form.otroExperimenta,
            añoOtroExperimenta: form.añoOtroExperimenta,
            aceptoTerminos: form.aceptoTerminos,
        };

        try {
            console.log(formData);
            // Enviar los datos del formulario a un endpoint
            const response = await fetch('https://cima2025.up.railway.app/login/addExperimenta', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            // Manejar la respuesta del servidor
            if (response.ok) {
                const infonew = await getInfo.infoAct(emailGoogle);
                const result = await response.json();
                console.log('Respuesta del servidor:', result);
                navigate('/dashboardexperimenta');
                Swal.fire({
                    title: "¡Bienvenido a Experimenta!",
                    text: "Acabas de realizar tu pre-inscripción a Experimenta. En los próximos días un miembro del equipo se comunicará contigo para confirmar si tenemos cupos disponibles para el lugar que elegiste, en ese momento se te informará cómo realizar la seña para confirmar tu lugar.",
                    icon: "success",
                    customClass: {
                        confirmButton: style.confirmButton
                    }
                })

            } else {
                console.error('Error en la solicitud:', response.statusText);
                Swal.fire({
                    title: "Error",
                    text: "Algo salio mal, intenta de nuevo mas tarde",
                    icon: "error",
                    customClass: {
                        confirmButton: style.confirmButton
                    }
                })
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            Swal.fire({
                title: "Error",
                text: "Algo salio mal, intenta de nuevo mas tarde",
                icon: "error",
                customClass: {
                    confirmButton: style.confirmButton
                }
            })
        }
    };

    const years = [];
    for (let i = 2004; i <= 2024; i++) {
        years.push(i);
    }

    return (

        <div className={style.divGeneral}>

            <img className={style.titulo} src="https://i.postimg.cc/tCxv0n4r/Recurso-2preinscripcion.png" alt="" />

            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.divForm}>
                    <label className={style.subtitulo} htmlFor="opcion">
                        <img className={style.img} src="https://i.postimg.cc/5NNRfWW8/Recurso-6enquepractica.png" alt="" />
                    </label>
                    <div className={style.divTrans}>

                        <div className={style.botonesActiv}>
                            <button className={style.botonesPrac} type="button" onClick={() => handleSelectToggle('experimenta1')}>
                                {selectState.experimenta1Enabled ? 'Latinoamericanas↓' : 'Latinoamericanas'}
                            </button>
                            <button className={style.botonesPrac} type="button" onClick={() => handleSelectToggle('experimenta2')}>
                                {selectState.experimenta2Enabled ? 'Transoceanicas↓' : 'Transoceanicas'}
                            </button>
                        </div>

                        {selectState.experimenta1Enabled && (
                            <select
                                className={style.select1}
                                name="experimenta1"
                                value={form.experimenta1}
                                onChange={handleSelectChange}
                                disabled={!selectState.experimenta1Enabled}
                                required
                            >
                                <option value="" disabled>Elige una opción</option>
                                {/* <option value="ARG - Río Negro - Cinco Saltos y Junín de los Andes">ARG - Río Negro - Cinco Saltos y Junín de los Andes</option> */}
                                <option value="ARG - Córdoba - Bell Ville">ARG - Córdoba - Bell Ville</option>
                                <option value="ARG - Córdoba - San José de las Salinas">ARG - Córdoba - San José de las Salinas</option>
                                <option value="ARG - Entre Ríos - Libaros">ARG - Entre Ríos - Libaros</option>
                                <option value="ARG - Salta - Cachi">ARG - Salta - Cachi</option>
                                <option value="ARG - Chaco - Las Breñas">ARG - Chaco - Las Breñas</option>
                                {/* <option value="ARG - San Juan - Valle Fertil">ARG - San Juan - Valle Fertil</option> */}
                                {/* <option value="ARG - Misiones - Comunidad Laosiana - Posadas">ARG - Misiones - Comunidad Laosiana - Posadas</option> */}
                                {/* <option value="ARG - Misiones - Comunidad de Sordos - Posadas">ARG - Misiones - Comunidad de Sordos - Posadas</option> */}
                                {/* <option value="ARG - Santa Fe - Comunidad Mocoví - Colonia Dolores">ARG - Santa Fe - Comunidad Mocoví - Colonia Dolores</option> */}
                                <option value="ARG - Cordoba - Altamira">ARG - Cordoba - Altamira</option>
                                <option value="ARG - Cordoba - Parque Futura">ARG - Cordoba - Parque Futura</option>
                                <option value="ARG - Cordoba - Rio cuarto">ARG - Cordoba - Rio cuarto</option>
                                <option value="⁠⁠ARG - Gral Deheza - Córdoba">⁠⁠ARG - Gral Deheza - Córdoba</option>
                                <option value="ARG - ⁠⁠Barrancas - Neuquén">ARG - ⁠⁠Barrancas - Neuquén</option>
                                <option value="ARG - Luis Guillón - Buenos Aires">ARG - Luis Guillón - Buenos Aires</option>
                                <option value=" ⁠⁠ARG - San Nicolás - Buenos Aires"> ⁠⁠ARG - San Nicolás - Buenos Aires</option>
                                <option value=" ⁠ARG - La Rinconada - Córdoba"> ⁠ARG - La Rinconada - Córdoba</option>
                                <option value="CHI - Llanquihue - Sector Las Cruces">CHI - Llanquihue - Sector Las Cruces</option>
                                <option value="CHI - Región de Aysén - Patagonia">CHI - Región de Aysén - Patagonia</option>
                                <option value="CHI - Mahuidanche">CHI - Mahuidanche</option>
                                <option value="CHI - Colina - Santiago de Chile">CHI - Colina - Santiago de Chile</option>
                                <option value="CHI - Araucania - Cautin">CHI - Araucania - Cautin</option>
                                <option value="BO - Oruro - Zona Pumas Andinos">BO - Oruro - Zona Pumas Andinos</option>
                                <option value="BO - Cochabamba - Prov. Punata">BO - Cochabamba - Prov. Punata</option>
                                <option value="BO - Sucre - Barrio Bethel">BO - Sucre - Barrio Bethel</option>
                                <option value="BO - Santa Cruz - Comunidad Betania">BO - Santa Cruz - Comunidad Betania</option>
                                <option value="BO - Potosí - Localidad Uyuni">BO - Potosí - Localidad Uyuni</option>
                                <option value="BO - Cochabamba - Kewiña">BO - Cochabamba - Kewiña</option>
                                {/* <option value="BRA - Sao Paulo - Rio Grande da Serra">BRA - Sao Paulo - Rio Grande da Serra</option> */}
                                <option value="PE - Lima - Collique">PE - Lima - Collique</option>
                                <option value="PE - Tingo Maria">PE - Tingo Maria</option>
                                <option value="PE - Cajamarca">PE - Cajamarca</option>
                                <option value="PE - Yanesha">PE - Yanesha</option>
                                <option value="PRY - Capital - Come Lord ">PRY - Capital - Come Lord</option>
                                <option value="PRY - Central - Areguá">PRY - Central - Aregua</option>
                                <option value="PRY - Caaguazú - Coronel">PRY - Caaguazú - Coronel</option>
                                <option value="PRY - San Pedro - Puerto Antequera">PRY - San Pedro - Puerto Antequera</option>
                                <option value="PRY - Itapúa - San Luis del Paraná">PRY - Itapúa - San Luis del Paraná</option>
                                <option value="PRY - Boquerón - Loma Plata">PRY - Boquerón - Loma Plata</option>
                                {/* <option value="UY - Treinta y Tres">UY - Treinta y Tres</option> */}
                                <option value="UY - Cerro Largo - Melo">UY - Cerro Largo - Melo</option>
                                <option value="ECU - Selva amazónica">ECU - Selva amazónica</option>
                                {/* <option value="BRA - San Pablo">BRA - San Pablo</option> */}

                            </select>
                        )}
                        {selectState.experimenta2Enabled && (
                            <select
                                className={style.select1}
                                name="experimenta2"
                                value={form.experimenta2}
                                onChange={handleSelectChange}
                                disabled={!selectState.experimenta2Enabled}
                                required
                            >
                                {/*
                        cerradas: 
                         */}
                                {/*  */}

                                <option value="" disabled>Elige una opción</option>
                                {/* <option value="Tailandia">Tailandia</option> */}
                                <option value="Turquía">Turquía</option>
                                <option value="Albania">Albania</option>
                                {/* <option value="España">España</option> */}
                                <option value="Macedonia">Macedonia</option>
                                {/* <option value="Kenia">Kenia</option> */}
                                {/* <option value="Senegal">Senegal</option> */}
                                <option value="EEUU - Houston - Rohingya">EEUU - Houston - Rohingya</option>

                            </select>
                        )}
                    </div>
                </div>

                <div className={style.divForm}>
                    <label className={style.subtitulo}>
                        <img className={style.img} src="https://i.postimg.cc/gkjXr3ZD/Recurso-4otro.png" alt="" />
                    </label>
                    <input
                        type="checkbox"
                        name="otroExperimenta"
                        checked={form.otroExperimenta}
                        onChange={handleChange}
                        className={style.select1}
                    />
                </div>

                <div className={style.divForm}>
                    <label className={style.subtitulo} htmlFor="anio">
                        <img className={style.img} src="https://i.postimg.cc/KjzzkyRz/Recurso-5a-o.png" alt="" />
                    </label>
                    <select
                        name="añoOtroExperimenta"
                        value={form.añoOtroExperimenta}
                        onChange={handleChange}
                        disabled={!form.otroExperimenta}
                        required={form.otroExperimenta}
                        className={style.select1}
                    >
                        <option value="" disabled>Elige un año</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className={style.divForm}>
                    <label>
                        <Link to={"/infoimportanteexperimenta"} target="_blank" rel="noopener noreferrer">
                            Acepto los términos y condiciones
                        </Link>
                    </label>
                    <input
                        type="checkbox"
                        name="aceptoTerminos"
                        checked={form.aceptoTerminos}
                        onChange={handleChange}
                        required
                        className={style.select1}
                    />
                </div>

                <button className={style.boton} type="submit">Enviar</button>
            </form>
        </div>
    );

}

export default FormExperimenta;