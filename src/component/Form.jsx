import React, { useState } from 'react';
import getCountrysAndProvinces from '../utils/getCountrysAndProvinces';

function RegistroFormulario() {
    const [selectedName, setName] = useState('');
    const [selectedLastname, setLastName] = useState('');
    const [selectedCountry, setCountry] = useState('');
    const [selectedProvince, setProvince] = useState('');
    const [selectedChurch, setChurch] = useState('');
    const [city, setCity] = useState('');
    const [leaderName, setLeaderName] = useState('');
    const [leaderPhone, setLeaderPhone] = useState('');
    const [allergies, setAllergies] = useState('');
    const [medication, setMedication] = useState('');
    const [healthNotes, setHealthNotes] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [emergencyContactName, setEmergencyContactName] = useState('');
    const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
    const [diet, setDiet] = useState('');
    const [participationCima, setParticipationCima] = useState('');
    const [participation, setParticipation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes procesar los datos enviados (por ejemplo, enviarlos al servidor).

    };
    const location = getCountrysAndProvinces();

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleProvinceChange = (event) => {
        setProvince(event.target.value);
    };
    return (
        <div>
            <h1>Registro de Datos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    value={selectedName}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br />

                <label htmlFor="lastname">Apellido:</label>
                <input
                    type="text"
                    id="lastname"
                    value={selectedLastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                /><br />



                <label htmlFor="country">País:</label>
                <select value={selectedCountry} onChange={handleCountryChange}>
                    <option value="">Selecciona un país</option>
                    {location.countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>

                <label htmlFor="province">Provincia:</label>
                <select value={selectedProvince} onChange={handleProvinceChange}>
                    <option value="">Selecciona una province</option>
                    {location[selectedCountry]?.map((province) => (
                        <option key={province} value={province}>
                            {province}

                        </option>
                    ))}

                </select><br />

                <label htmlFor="church">Iglesia:</label>
                <input
                    type="text"
                    id="church"
                    value={selectedChurch}
                    onChange={(e) => setChurch(e.target.value)}
                /><br />

                <label htmlFor="leaderName">Nombre y apellido del Pastor / Anciano / Líder:</label>
                <input
                    type="text"
                    id="leaderName"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                /><br />


                <label htmlFor="leaderPhone">Teléfono del Pastor / Anciano / Líder:</label>
                <input
                    type="tel"
                    id="leaderPhone"
                    value={leaderPhone}
                    onChange={(e) => setLeaderPhone(e.target.value)}
                /><br />
                <h2>Datos de Salud</h2>
                <p>Durante CIMA tendremos un equipo de enfermeros atentos a ayudarte en situaciones no complejas. Ante alguna complejidad, se derivará al hospital correspondiente.
                </p>
                <p>Los siguientes datos serán muy útiles ante alguna contingencia.</p>
                <label htmlFor="allergies">	¿Sos alérgico/a algo? Detalla tus alergias </label>
                <input
                    type="text"
                    id="allergies"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)} /><br />

                <label htmlFor="medication">¿Tomás alguna medicación? Detalla los medicamentos que estás tomando:</label>
                <input
                    type="text"
                    id="medication"
                    value={medication}
                    onChange={(e) => setMedication(e.target.value)} /><br />

                <label htmlFor="healthNotes">Detalla cualquier situación referente a tu salud que creas conveniente que sepamos.</label>
                <input
                    type="text"
                    id="healthNotes"
                    value={healthNotes}
                    onChange={(e) => setHealthNotes(e.target.value)} /><br />

                <h2>Datos de Contacto: </h2><p> Asegurate de completar los siguientes datos con información actualizada porque serán los medios por los cuales nos contactaremos con vos.</p>

                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                    type="tel"
                    id="leadewhatsapprPhone"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                /><br />

                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /><br />
                <h2>Ante una emergencia, ¿a quién podríamos contactar? </h2>

                <label htmlFor="emergencyContactName">Nombre:</label>
                <input
                    type="text"
                    id="emergencyContactName"
                    value={emergencyContactName}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br />
                <label htmlFor="emergencyContactPhone">	Teléfono (Con código de país)</label>
                <input
                    type="tel"
                    id="emergencyContactPhone"
                    value={emergencyContactPhone}
                    onChange={(e) => setEmergencyContactPhone(e.target.value)}
                /><br />
                <h2>Alimentacion</h2>
                <h2>Selecciona una opción:</h2>
                <select value={diet} onChange={setDiet}>
                    <option value="celiaco">Soy celiaco/a</option>
                    <option value="vegetariano">Soy vegetariano/a</option>
                    <option value="diabetico">Soy diabético/a</option>
                    <option value="ninguna">Ninguna</option>
                    <option value="otra">Otra</option>
                </select>
                {diet === 'otra' && (
                    <input
                        type="text"
                        placeholder="Especifica otra opción"
                    //*si se quiere especificar la almentacion en un futuro
                    />
                )}

                <h2>Otros Datos :</h2>
                <select value={participationCima} onChange={setParticipationCima}>
                    <option value="celiaco">Cima Day</option>
                    <option value="vegetariano">Prisma</option>
                    <option value="diabetico">Eurovoluntariado</option>
                    <option value="ninguna">Cimay</option>
                    <option value="otra">Hice el curso Storyline o Vaya a Movilizar</option>
                    <option value="otra">Ninguno</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default RegistroFormulario;