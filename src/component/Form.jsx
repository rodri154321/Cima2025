import React, { useState } from 'react';
import useForm from '../hook/useForm';
import { getCheckListItemsCima, getCheckListItemsFeeding, getCountrysAndProvinces } from '../utils/formFieldData';

function RegistroFormulario() {
    const checkListItemsCima = getCheckListItemsCima();
    const checkListItemsFeeding = getCheckListItemsFeeding();
    const location = getCountrysAndProvinces();
    const initialData = {
        firstname: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        countryOfResidence: "",
        province: "",
        city: "",
        church: "",
        pastor: "",
        pastorPhoneNumber: 0,
        allergies: "",
        medication: "",
        healthDetails: "",
        whatsappNumber: 0,
        email: "",
        emergencyContactName: "",
        emergencyContactPhoneNumber: 0,
        dietaryPreferences: [],
        cima: []
    };
    const onValidate = (form) => {
        let errors = {};
        if (!form.firstname.trim()) {
            errors.firstname = "Debe colocar un nombre";
        }

        return errors
    }
    const { form, errors, loading, handleSubmit, handleChange } = useForm(initialData, onValidate);


    return (
        <div>
            <h1>Registro de Datos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Nombre:</label>
                <input
                    type="text"
                    name="firstname"
                    value={form.firstname}
                    onChange={handleChange}

                /><br />
                {errors.firstname && <div>{errors.firstname}</div>}

                <label htmlFor="lastName">Apellido:</label>
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}

                /><br />
                {errors.lastName && <div>{errors.lastname}</div>}

                <label htmlFor="dateOfBirth">Fecha de Nacimiento:</label>
                <input
                    type="date"
                    id="birthdate"
                    name="dateOfBirth"
                    value={form.dateOfBirth}
                    onChange={handleChange}
                /><br />
                {errors.dateOfBirth && <div>{errors.dateOfBirth}</div>}
                <label htmlFor="gender">Genero:</label>
                <select name="gender" value={form.gender} onChange={handleChange}>
                    <option value="">Seleciona tu genero</option>
                    <option value="masculino">masculino</option>
                    <option value="femenino">femenino</option>
                </select>
                {errors.gender && <div>{errors.gender}</div>}

                <label htmlFor="country">Nacionalidad:</label>
                <select name="nationality" value={form.nationality} onChange={handleChange}>
                    <option value="">Selecciona un país</option>
                    {location.countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                {errors.nationality && <div>{errors.nationality}</div>}
                <label htmlFor="country">Pais de residencia:</label>
                <select name="countryOfResidence" value={form.countryOfResidence} onChange={handleChange}>
                    <option value="">Selecciona un país</option>
                    {location.countries.map((country) => (
                        <option
                            key={country}
                            value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                {errors.countryOfResidence && <div>{errors.countryOfResidence}</div>}

                <label htmlFor="province">Provincia:</label>
                <select name="province" value={form.province} onChange={handleChange}>
                    <option value="">Selecciona una province</option>
                    {location[form.countryOfResidence]?.map((province) => (
                        <option
                            key={province}

                            value={province}>
                            {province}

                        </option>
                    ))}
                </select><br />
                {errors.province && <div>{errors.province}</div>}
                <label htmlFor="church">Iglesia:</label>
                <input
                    type="text"
                    name="church"
                    value={form.church}
                    onChange={handleChange}
                /><br />
                {errors.church && <div>{errors.church}</div>}
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
                <label htmlFor="allergies">	¿Sos alérgico/a algo? Detalla tus alergias </label>
                <input
                    type="text"
                    name="allergies"
                    value={form.allergies}
                    onChange={handleChange} /><br />
                {errors.allergies && <div>{errors.allergies}</div>}
                <label htmlFor="medication">¿Tomás alguna medicación? Detalla los medicamentos que estás tomando:</label>
                <input
                    type="text"
                    name="medication"
                    value={form.medication}
                    onChange={handleChange} /><br />
                {errors.medication && <div>{errors.medication}</div>}
                <label htmlFor="healthDetails">Detalla cualquier situación referente a tu salud que creas conveniente que sepamos.</label>
                <input
                    type="text"
                    name="healthDetails"
                    value={form.healthDetails}
                    onChange={handleChange} /><br />
                {errors.healthDetails && <div>{errors.healthDetails}</div>}
                <h2>Datos de Contacto: </h2><p> Asegurate de completar los siguientes datos con información actualizada porque serán los medios por los cuales nos contactaremos con vos.</p>

                <label htmlFor="whatsappNumber">Whatsapp</label>
                <input
                    type="tel"
                    name="whatsappNumber"
                    value={form.whatsappNumber}
                    onChange={handleChange}
                /><br />
                {errors.whatsappNumber && <div>{errors.whatsappNumber}</div>}
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

                    {checkListItemsFeeding.map((item, index) => {

                        return (
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
                        );
                    })}
                </ol>

                {form.dietaryPreferences[0] === 'Otra' && (
                    <input
                        type="text"
                        name="dietaryPreferences"
                        placeholder="Especifica otra opción"
                        value={form.dietaryPreferences}
                        onChange={handleChange}
                    //*si se quiere especificar la almentacion en un futuro
                    />
                )}
                {errors.dietaryPreferences && <div>{errors.dietaryPreferences}</div>}

                <h2>Otros Datos :</h2>
                <ol>
                    {checkListItemsCima.map((item, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="cima"
                                    value={item}
                                    checked={form.cima.includes(item)}
                                    onChange={handleChange}
                                />
                                {item}
                            </label>
                        </li>
                    ))}
                </ol>
                {errors.cima && <div>{errors.cima}</div>}
                <button type="submit" disabled = {loading}>{loading ? "Enviando....": "Enviar"}</button>
            </form>
        </div>
    );
}

export default RegistroFormulario;