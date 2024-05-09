import React, { useEffect, useState } from 'react';
import useForm from '../hook/useForm';
import { getCheckListItemsCima, getCheckListItemsFeeding } from '../utils/formFieldData';
import getApiCountry from '../utils/getApiCountry';
import SerachResultList from './SerachResultList';


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
        esCeliaco:false,
        esDiabetico:false,
        esVegetariano:false,
        detalleAlimentacion : null,
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
        <div>
            <h1>Registro de Datos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}

                /><br />
                {errors.nombre && <div>{errors.nombre}</div>}

                <label htmlFor="apellido">Apellido:</label>
                <input
                    type="text"
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}

                /><br />
                {errors.apellido && <div>{errors.apellido}</div>}

                <label htmlFor="dateOfBirth">Fecha de Nacimiento:</label>
                <input
                    type="date"
                    id="birthdate"
                    name="dateOfBirth"
                    value={form.dateOfBirth}
                    onChange={handleChange}
                /><br />
                {errors.dateOfBirth && <div>{errors.dateOfBirth}</div>}
                <label htmlFor="sexo">Genero:</label>
                <select name="sexo" value={form.sexo} onChange={handleChange}>
                    <option value="">Seleciona tu genero</option>
                    <option value="masculino">masculino</option>
                    <option value="femenino">femenino</option>
                </select>
                {errors.sexo && <div>{errors.sexo}</div>}


                <label htmlFor="nacionalidad">Nacionalidad:</label>
                <div>
                    <input
                        type="text"
                        name="nacionalidad"
                        value={form.nacionalidad}
                        onChange={handleChange}

                    />
                    <SerachResultList dataCountry={filterCountry} />
                </div>


                <br />
                {errors.nacionalidad && <div>{errors.nacionalidad}</div>}
                <label htmlFor="country">Pais de residencia:</label>
                <select name="paisResidencia" value={form.paisResidencia} onChange={handleChange}>
                    <option value="">Selecciona un país</option>
                </select>
                {errors.paisResidencia && <div>{errors.paisResidencia}</div>}

                <label htmlFor="province">Provincia:</label>
                <select name="province" value={form.province} onChange={handleChange}>
                    <option value="">Selecciona una province</option>
                </select><br />
                {errors.province && <div>{errors.province}</div>}
                <label htmlFor="iglesia">Iglesia:</label>
                <input
                    type="text"
                    name="iglesia"
                    value={form.iglesia}
                    onChange={handleChange}
                /><br />
                {errors.iglesia && <div>{errors.iglesia}</div>}
                <label htmlFor="pastor">Nombre y apellido del Pastor / Anciano / Líder:</label>
                <input
                    type="text"
                    name="pastor"
                    value={form.pastor}
                    onChange={handleChange}
                /><br />
                {errors.pastor && <div>{errors.pastor}</div>}


                <label htmlFor="pastorPhoneNumber">Teléfono del Pastor / Anciano / Líder:</label>
                <input
                    type="tel"
                    name="pastorPhoneNumber"
                    value={form.pastorPhoneNumber}
                    onChange={handleChange}
                /><br />
                {errors.pastor && <div>{errors.pastor}</div>}
                <h2>Datos de Salud</h2>
                <p>Durante CIMA tendremos un equipo de enfermeros atentos a ayudarte en situaciones no complejas. Ante alguna complejidad, se derivará al hospital correspondiente.
                </p>
                <p>Los siguientes datos serán muy útiles ante alguna contingencia.</p>
                <p>¿Sos alérgico/a algo?</p>
                <label htmlFor="esAlergico">Si</label>
                <input
                    type="checkbox"
                    name="esAlergico"
                    checked={form.esAlergico}
                    onChange={handleChange}
                />
                {form.esAlergico && (
                    <div>
                        <label htmlFor="detalleAlergia">Detalla tus alergias</label>
                        <input
                            type="text"
                            name="detalleAlergia"
                            value={form.detalleAlergia}
                            onChange={handleChange}
                        />
                    </div>
                )}<br />


                <label htmlFor="tieneMedicacion">¿Tomás alguna medicación? </label>
                <input
                    type="checkbox"
                    name="tieneMedicacion"
                    checked={form.tieneMedicacion}
                    onChange={handleChange}
                />
                {errors.tieneMedicacion && <div>{errors.tieneMedicacion}</div>}
                {form.tieneMedicacion && (
                    <div>
                        <label htmlFor="detalleMedicacion">Detalla los medicamentos que estás tomando:</label>
                        <input
                            type="text"
                            name="detalleMedicacion"
                            value={form.detalleMedicacion}
                            onChange={handleChange}
                        />
                    </div>
                )}<br />
                <label htmlFor="healthDetails">Detalla cualquier situación referente a tu salud que creas conveniente que sepamos.</label>
                <input
                    type="text"
                    name="healthDetails"
                    value={form.healthDetails}
                    onChange={handleChange} /><br />
                {errors.healthDetails && <div>{errors.healthDetails}</div>}
                <h2>Datos de Contacto: </h2><p> Asegurate de completar los siguientes datos con información actualizada porque serán los medios por los cuales nos contactaremos con vos.</p>

                <label htmlFor="telefono">Whatsapp</label>
                <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                /><br />
                {errors.telefono && <div>{errors.telefono}</div>}
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange} /><br />
                {errors.email && <div>{errors.email}</div>}
                <h2>Ante una emergencia, ¿a quién podríamos contactar? </h2>

                <label htmlFor="emergencyContactName">Nombre:</label>
                <input
                    type="text"
                    name="emergencyContactName"
                    value={form.emergencyContactName}
                    onChange={handleChange}
                /><br />
                {errors.emergencyContactName && <div>{errors.emergencyContactName}</div>}
                <label htmlFor="emergencyContactPhoneNumber">	Teléfono (Con código de país)</label>
                <input
                    type="tel"
                    name="emergencyContactPhoneNumber"
                    value={form.emergencyContactPhoneNumber}
                    onChange={handleChange}
                /><br />
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
                            type="text"
                            name="detalleAlimentacion "
                            value={form.detalleAlimentacion }
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