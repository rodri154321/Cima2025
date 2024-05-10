import React, { useEffect, useState } from 'react';
import useForm from '../../hook/useForm';
import { getCheckListItemsCima, getCheckListItemsFeeding } from '../../utils/formFieldData';
import getApiCountry from '../../utils/getApiCountry';
import SerachResultList from '../SerachResultList';
import style from "./Form.module.css"


function RegistroFormulario() {
    const [dataCountry, setDataCountry] = useState("")
    const checkListItemsFeeding = getCheckListItemsFeeding();
    const checkListItemsCima = getCheckListItemsCima();
    const initialData = {
        nombre: "",
        apellido: "",
        emailGoogle: "",
        email: "",
        fechaNacimiento: "",
        documento: "",
        sexo: "",
        nacionalidad: "",
        paisResidencia: "",
        provincia: "",
        ciudad: "",
        iglesia: "",
        pastor: "",
        pastorPhoneNumber: 0,
        esAlergico: false,
        detalleAlergia: "",
        tieneMedicacion: false,
        detalleMedicacion: "",
        telefono: 0,
        emergencyContactName: "",
        emergencyContactPhoneNumber: "",
        esCeliaco: false,
        esDiabetico: false,
        esVegetariano: false,
        dietaryPreferences: [],
        detalleAlimentacion: null,
        participacionMovida: []
    };
    const onValidate = (form) => {
        let errors = {};
        if (!form.nombre.trim()) {
            errors.nombre = "Debe colocar un nombre";
        }

        return errors
    }


    useEffect(() => {
        // Ejecuta getApiCountry() cuando el componente se monta
        let data = getApiCountry();
        setDataCountry(data);
    }, []);
    const { filterCountry, form, errors, loading, handleSubmit, handleChange } = useForm(initialData, dataCountry, onValidate);
    return (
        <div className={style.contenedorForm}>
            <h1>Registro de Datos</h1>
            <form onSubmit={handleSubmit} className={style.Form}>
                <div className={style.inputGroup}>
                    <label htmlFor="nombre" >Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                    />
                    {errors.nombre && <div className={style.error}>{errors.nombre}</div>}
                </div>
                <br />

                <div className={style.inputGroup}>
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        value={form.apellido}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.apellido && <div>{errors.apellido}</div>}
                <div className={style.inputGroup}>

                    <input
                        type="date"
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        value={form.fechaNacimiento}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.fechaNacimiento && <div>{errors.fechaNacimiento}</div>}
                <div className={style.inputGroup}>
                    <label htmlFor="sexo">Genero:</label>
                    <select name="sexo" value={form.sexo} onChange={handleChange}>
                        <option value="">Seleciona tu genero</option>
                        <option value="masculino">masculino</option>
                        <option value="femenino">femenino</option>
                    </select>
                </div>
                {errors.sexo && <div>{errors.sexo}</div>}

                <div className={style.inputGroup}>

                    <div>
                        <input
                            className=''
                            type="text"
                            name="nacionalidad"
                            value={form.nacionalidad}
                            onChange={handleChange}

                        />
                        <label htmlFor="nacionalidad">Nacionalidad:</label>
                        <SerachResultList dataCountry={filterCountry} />
                    </div>
                </div>

                <br />
                {errors.nacionalidad && <div>{errors.nacionalidad}</div>}
                <div className={style.inputGroup}>
                    <label htmlFor="country">Pais de residencia:</label>
                    <select name="paisResidencia" value={form.paisResidencia} onChange={handleChange}>
                        <option value="">Selecciona un país</option>
                    </select>
                </div>
                {errors.paisResidencia && <div>{errors.paisResidencia}</div>}
                <div className={style.inputGroup}>
                    <label htmlFor="province">Provincia:</label>
                    <select name="province" value={form.province} onChange={handleChange}>
                        <option value="">Selecciona una province</option>
                    </select>
                </div>
                <br />
                {errors.province && <div>{errors.province}</div>}
                <div className={style.inputGroup}>
                    <label htmlFor="iglesia">Iglesia:</label>
                    <input
                        className=''
                        type="text"
                        name="iglesia"
                        value={form.iglesia}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.iglesia && <div>{errors.iglesia}</div>}
                <div className={style.inputGroup}>
                    <label htmlFor="pastor">Nombre y apellido del Pastor / Anciano / Líder:</label>
                    <input
                        className=''
                        type="text"
                        name="pastor"
                        value={form.pastor}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.pastor && <div>{errors.pastor}</div>}

                <div className={style.inputGroup}>

                    <input
                        type="tel"
                        name="pastorPhoneNumber"
                        value={form.pastorPhoneNumber}
                        onChange={handleChange}
                    />
                    <label htmlFor="pastorPhoneNumber">Teléfono del Pastor / Anciano / Líder:</label>
                </div>
                <br />
                {errors.pastor && <div>{errors.pastor}</div>}
                <h2>Datos de Salud</h2>
                <p>Durante CIMA tendremos un equipo de enfermeros atentos a ayudarte en situaciones no complejas. Ante alguna complejidad, se derivará al hospital correspondiente.
                </p>
                <p>Los siguientes datos serán muy útiles ante alguna contingencia.</p>
                <p>¿Sos alérgico/a algo?</p>
                <div className={style.checkbox}>
                   
                    <input
                        type="checkbox"
                        name="esAlergico"
                        checked={form.esAlergico}
                        onChange={handleChange}
                    />
                     <label htmlFor="check-23" style={{ '--size': '30px' }}>
                        <svg viewBox="0 0 50 50">
                            <path d="M5 30 L20 45 L45 5"></path>
                        </svg>
                    </label>
                </div>
                {form.esAlergico && (
                    <div className={style.inputGroup}>
                        <label htmlFor="detalleAlergia">Detalla tus alergias</label>
                        <input
                            className=''
                            type="text"
                            name="detalleAlergia"
                            value={form.detalleAlergia}
                            onChange={handleChange}
                        />
                    </div>
                )}<br />

                <div className={style.inputGroup}>
                    <label htmlFor="tieneMedicacion">¿Tomás alguna medicación? </label>
                    <input
                        type="checkbox"
                        name="tieneMedicacion"
                        checked={form.tieneMedicacion}
                        onChange={handleChange}
                    />
                </div>
                {errors.tieneMedicacion && <div>{errors.tieneMedicacion}</div>}
                {form.tieneMedicacion && (
                    <div className={style.inputGroup}>
                        <label htmlFor="detalleMedicacion">Detalla los medicamentos que estás tomando:</label>
                        <input
                            className=''
                            type="text"
                            name="detalleMedicacion"
                            value={form.detalleMedicacion}
                            onChange={handleChange}
                        />
                    </div>
                )}<br />
                <h2 >Detalla cualquier situación referente a tu salud que creas conveniente que sepamos.</h2>
                <div className={style.inputGroup}>
                    <input
                        className=''
                        type="text"
                        name="healthDetails"
                        value={form.healthDetails}
                        onChange={handleChange} />
                </div>
                <br />
                {errors.healthDetails && <div>{errors.healthDetails}</div>}
                <h2>Datos de Contacto: </h2><p> Asegurate de completar los siguientes datos con información actualizada porque serán los medios por los cuales nos contactaremos con vos.</p>
                <div className={style.inputGroup}>
                    <label htmlFor="telefono">Whatsapp</label>
                    <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                    />
                </div>
                <br />
                {errors.telefono && <div>{errors.telefono}</div>}
                <div className={style.inputGroup}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange} />
                </div>
                <br />
                {errors.email && <div>{errors.email}</div>}
                <h2>Ante una emergencia, ¿a quién podríamos contactar? </h2>
                <div className={style.inputGroup}>
                    <label htmlFor="emergencyContactName">Nombre:</label>
                    <input
                        className=''
                        type="text"
                        name="emergencyContactName"
                        value={form.emergencyContactName}
                        onChange={handleChange}
                    />
                </div>
                {errors.emergencyContactName && <div>{errors.emergencyContactName}</div>}
                <div className={style.inputGroup}>
                    <label htmlFor="emergencyContactPhoneNumber">	Teléfono (Con código de país)</label>
                    <input
                        type="tel"
                        name="emergencyContactPhoneNumber"
                        value={form.emergencyContactPhoneNumber}
                        onChange={handleChange}
                    /></div>
                {errors.emergencyContactPhoneNumber && <div>{errors.emergencyContactPhoneNumber}</div>}
                <h2>Alimentacion</h2>
                <h2>Selecciona una opción:</h2>
                <ol>
                    {checkListItemsFeeding.map((item, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="dietaryPreferences"
                                    value={item}
                                    checked={form.dietaryPreferences.includes(item)}
                                    onChange={handleChange}
                                />
                                {item}
                            </label>
                        </li>
                    ))}
                </ol>
                {errors.dietaryPreferences && <div>{errors.dietaryPreferences}</div>}
                {form.dietaryPreferences[0] === 'Otra' && (
                    <div>
                        <label htmlFor="detalleAlimentacion "> Especifique los detalles de alimentacion.</label>
                        <input
                            className=''
                            type="text"
                            name="detalleAlimentacion "
                            value={form.detalleAlimentacion}
                            onChange={handleChange}
                        //*si se quiere especificar la almentacion en un futuro
                        />
                    </div>
                )}

                <h2>Otros Datos :</h2>
                <ol>
                    {checkListItemsCima.map((item, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="participacionMovida"
                                    value={item}
                                    checked={form.participacionMovida.includes(item)}
                                    onChange={handleChange}
                                />
                                {item}
                            </label>
                        </li>
                    ))}
                </ol>
                {errors.participacionMovida && <div>{errors.participacionMovida}</div>}
                <button type="submit" disabled={loading}>{loading ? "Enviando...." : "Enviar"}</button>
            </form>
        </div>
    );
}

export default RegistroFormulario;