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
        allergies: false,
        allergyDetails: "",
        medication: false,
        medicationDetails: "",
        whatsappNumber: 0,
        email: "",
        emergencyContactName: "",
        emergencyContactPhoneNumber: "",
        dietaryPreferences: [],
        dietaryDeatail: null,
        participacionMovida: []
    };
    const onValidate = (form) => {
        let errors = {};
        if (!form.firstname.trim()) {
            errors.firstname = "Debe colocar un nombre";
        }

        return errors
    }
  

    useEffect( () =>  {
        // Ejecuta getApiCountry() cuando el componente se monta
        let data =  getApiCountry();
        setDataCountry(data);
    }, []);
    const {filterCountry, form, errors, loading, handleSubmit, handleChange } = useForm(initialData, dataCountry, onValidate);
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


                <label htmlFor="nationality">Nacionalidad:</label>
                <div>
                <input
                    type="text"
                    name="nationality"
                    value={form.nationality}
                    onChange={handleChange}

                />
                <SerachResultList dataCountry ={filterCountry}/>
                </div>
                

                <br />
                {errors.nationality && <div>{errors.nationality}</div>}
                <label htmlFor="country">Pais de residencia:</label>
                <select name="countryOfResidence" value={form.countryOfResidence} onChange={handleChange}>
                    <option value="">Selecciona un país</option>
                </select>
                {errors.countryOfResidence && <div>{errors.countryOfResidence}</div>}

                <label htmlFor="province">Provincia:</label>
                <select name="province" value={form.province} onChange={handleChange}>
                    <option value="">Selecciona una province</option>
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
                <p>¿Sos alérgico/a algo?</p>
                <label htmlFor="allergies">Si</label>
                <input
                    type="checkbox"
                    name="allergies"
                    checked={form.allergies}
                    onChange={handleChange}
                />
                {form.allergies && (
                    <div>
                        <label htmlFor="allergyDetails">Detalla tus alergias</label>
                        <input
                            type="text"
                            name="allergyDetails"
                            value={form.allergyDetails}
                            onChange={handleChange}
                        />
                    </div>
                )}<br />


                <label htmlFor="medication">¿Tomás alguna medicación? </label>
                <input
                    type="checkbox"
                    name="medication"
                    checked={form.medication}
                    onChange={handleChange}
                />
                {errors.medication && <div>{errors.medication}</div>}
                {form.medication && (
                    <div>
                        <label htmlFor="medicationDetails">Detalla los medicamentos que estás tomando:</label>
                        <input
                            type="text"
                            name="medicationDetails"
                            value={form.medicationDetails}
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
                    <label htmlFor="dietaryDeatail"> Especifique los detalles de alimentacion.</label>
                    <input
                        type="text"
                        name="dietaryDeatail"
                        value={form.dietaryDeatail}
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