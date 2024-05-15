import React, { useEffect, useState } from 'react';
import useForm from '../../hook/useForm';
import getApiCountry from '../../utils/getApiCountry';
import getApiProvinces from "../../utils/getApiProvince"
import SerachResultList from '../SearchResultList';
import PhoneNumberValidation from '../PhoneInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from "./Form.module.css"



function RegistroFormulario() {
    const userString = localStorage.getItem('user');
    const userObject = JSON.parse(userString);
    const emailGoogle = userObject.emailGoogle;

    const [dataCountry, setDataCountry] = useState("")
    const initialData = {
        nombre: "",
        apellido: "",
        emailGoogle: "",
        email: "",
        telefono: "",
        codAreaUser: "",
        fechaNacimiento: "",
        documento: "",
        sexo: "",
        nacionalidad: "",
        paisResidencia: "",
        provincia: "",
        ciudad: "",
        iglesia: "",
        pastor: "",
        telefonoPastor: "",
        codAreaPastor: "",
        esAlergico: false,
        detalleAlergia: "",
        tieneMedicacion: false,
        detalleMedicacion: "",
        telefonoEmergencia: "",
        codAreaEmergencia: "",
        nombreEmergencia: "",
        detalleSalud: "",
        esDiabetico: false,
        esCeliaco: false,
        esVegetariano: false,
        Otra: false,
        detalleAlimentacion: null,
        participoCimaday: false,
        participoPrisma: false,
        participoEurovoluntariado: false,
        participoCima: false,
        participoSigue: false,

    };


    const handleSelect = (option, name) => {
        if (name == "nacionalidad") {
            setFilterCountry([])
            setForm({ ...form, nacionalidad: option });
        } else if (name == "paisResidencia") {
            setFilterCountryResidence([])
            setForm({ ...form, paisResidencia: option });
        } else {
            setForm({ ...form, provincia: option });
            setFilterProvinces([])
        }
    }


    useEffect(() => {
        // Ejecuta getApiCountry() cuando el componente se monta
        setForm({ ...form, emailGoogle: emailGoogle })
        async function fetchData() {
            try {
                const data = await getApiCountry();
                setDataCountry(data);
            } catch (error) {
                console.error('Error al obtener datos del país:', error);
            }
        }

        fetchData();
    }, []);
    const { filterCountry, filterProvinces, filterCountryResidence, form, setForm, setFilterCountry, onValidate, setFilterProvinces, setFilterCountryResidence, errors, loading, handleSubmit, handleChange } = useForm(initialData, dataCountry);
    return (
        <div className={style.contenedorForm}>
            <h1>COMPLETA TUS DATOS</h1>
            <h2>Datos Personales</h2>
            <form onSubmit={handleSubmit} className={style.Form}>
                <div className={style.inputGroup}>

                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="nombre"  >Nombre:</label>
                    {errors.nombre && <div className={style.error}>{errors.nombre}</div>}
                </div>
                <br />

                <div className={style.inputGroup}>

                    <input
                        type="text"
                        name="apellido"
                        value={form.apellido}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="apellido">Apellido:</label>
                    {errors.apellido && <div className={style.error}>{errors.apellido}</div>}
                </div>
                <br />

                <div className={style.inputGroup}>

                    <input
                        type="text"
                        name="documento"
                        value={form.documento}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="documento">n° Documento:</label>
                    {errors.documento && <div className={style.error}>{errors.documento}</div>}
                </div>
                <br />

                <div className={style.container_inputPhone}>
                    <PhoneNumberValidation
                        name="codAreaUser"
                        value={form.codAreaUser}
                        onChange={(cod) => handleChange(cod, "codAreaUser")}
                    />
                    <div className={style.inputGroup}>
                        <input
                            type="text"
                            name="telefono"
                            value={form.telefono}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="telefono">Teléfono :</label>
                        {errors.telefono && <div className={style.error}>{errors.telefono}</div>}
                    </div>
                </div>
                <br />

                <div className={style.inputGroup}>

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required />
                    <label htmlFor="email">Correo electrónico</label>
                    {errors.email && <div className={style.error}>{errors.email}</div>}
                </div>
                <br />
                <p>Fecha de Nacimiento</p>
                <div className={style.inputGroup}>
                    <DatePicker
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        selected={form.fechaNacimiento}
                        placeholderText='AAAA/MM/DD'
                        onChange={(date) => handleChange(date, "fechaNacimiento")}
                        dateFormat="yyyy-MM-dd"
                        required
                    />
                    {errors.fechaNacimiento && <div className={style.error}>{errors.fechaNacimiento}</div>}
                </div>
                <br />

                <div className={style.inputGroup}>
                    <select name="sexo" value={form.sexo} onChange={handleChange} required>
                        <option selected >Selecciona un sexo:</option>
                        <option value="masculino">masculino</option>
                        <option value="femenino">femenino</option>
                    </select>

                    {errors.sexo && <div className={style.error}>{errors.sexo}</div>}
                </div>


                <div className={style.inputGroup}>

                    <input

                        type="text"
                        name="nacionalidad"
                        value={form.nacionalidad}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="nacionalidad">Nacionalidad:</label>
                    <SerachResultList dataCountry={filterCountry} onSelect={(option) => handleSelect(option, "nacionalidad")} />
                    {errors.nacionalidad && <div className={style.error}>{errors.nacionalidad}</div>}
                </div>
                <br />
                <div className={style.inputGroup}>

                    <input

                        type="text"
                        name="paisResidencia"
                        value={form.paisResidencia}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="paisResidencia">Pais de residencia:</label>
                    <SerachResultList dataCountry={filterCountryResidence} onSelect={(option) => handleSelect(option, "paisResidencia")} />
                    {errors.paisResidencia && <div className={style.error}>{errors.paisResidencia}</div>}
                </div>
                <div className={style.inputGroup}>

                    <input

                        type="text"
                        name="provincia"
                        value={form.provincia}
                        onChange={handleChange}
                        disabled={form.paisResidencia.length > 0 ? false : true}
                        required
                    />
                    <label htmlFor="provincia">Provincia:</label>

                    {errors.province && <div className={style.error}>{errors.province}</div>}
                </div>


                {/* <div className={style.inputGroup}>

                    <input

                        type="text"
                        name="provincia"
                        value={form.provincia}
                        onChange={handleChange}
                        disabled={form.paisResidencia.length > 0 ? false : true}
                        required
                    />
                    <label htmlFor="provincia">Provincia:</label>
                    <SerachResultList dataCountry={filterProvinces} onSelect={(option) => handleSelect(option, "provincia")} />
                    {errors.province && <div className={style.error}>{errors.province}</div>}
                </div> */}

                <div className={style.inputGroup}>

                    <input
                        type="text"
                        name="ciudad"
                        value={form.ciudad}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="ciudad">Ciudad:</label>
                    {errors.ciudad && <div className={style.error}>{errors.ciudad}</div>}
                </div>
                <br />


                <div className={style.inputGroup}>

                    <input
                        type="text"
                        name="iglesia"
                        value={form.iglesia}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="iglesia">Iglesia:</label>
                    {errors.iglesia && <div className={style.error}>{errors.iglesia}</div>}
                </div>
                <br />
                <div className={style.inputGroup}>

                    <input
                        type="text"
                        name="pastor"
                        value={form.pastor}
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="pastor">Nombre y apellido del Pastor / Anciano / Líder:</label>
                    {errors.pastor && <div className={style.error}>{errors.pastor}</div>}
                </div>
                <br />

                <div className={style.container_inputPhone}>
                    <PhoneNumberValidation
                        name="codAreaPastor"
                        value={form.codAreaPastor}
                        onChange={(cod) => handleChange(cod, "codAreaPastor")}
                    />
                    <div className={style.inputGroup}>
                        <input
                            type="text"
                            name="telefonoPastor"
                            value={form.telefonoPastor}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="telefonoPastor">Teléfono :</label>
                        {errors.telefonoPastor && <div className={style.error}>{errors.telefonoPastor}</div>}
                    </div>
                </div>
                <br />
                <h2>Datos de Salud</h2>
                <p>Durante CIMA tendremos un equipo de enfermeros atentos a ayudarte en situaciones no complejas. Ante alguna complejidad, se derivará al hospital correspondiente.
                </p>
                <p>Los siguientes datos serán muy útiles ante alguna contingencia.</p>
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="esAlergico"
                            id='esAlergico'
                            checked={form.esAlergico}
                            onChange={handleChange}
                        />
                        <label htmlFor="esAlergico" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>

                    </div>
                    <p>¿Sos alérgico/a algo?</p>
                </div>
                {form.esAlergico && (
                    <div className={style.inputGroup}>
                        <label htmlFor="detalleAlergia">Detalla tus alergias:</label>
                        <input
                            className=''
                            type="text"
                            name="detalleAlergia"
                            value={form.detalleAlergia}
                            onChange={handleChange}
                        />
                    </div>
                )}<br />
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="tieneMedicacion"
                            id="tieneMedicacion"
                            checked={form.tieneMedicacion}
                            onChange={handleChange}
                        />
                        <label htmlFor="tieneMedicacion" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>
                    </div>
                    <p>¿Tomas alguna medicacion?</p>
                </div>
                {errors.tieneMedicacion && <div className={style.error}>{errors.tieneMedicacion}</div>}
                {form.tieneMedicacion && (
                    <div className={style.inputGroup}>

                        <input
                            className=''
                            type="text"
                            name="detalleMedicacion"
                            value={form.detalleMedicacion}
                            onChange={handleChange}
                        />
                        <label htmlFor="detalleMedicacion">Detalla los medicamentos:</label>
                    </div>
                )}<br />
                <h2 >Detalla cualquier situación referente a tu salud que creas conveniente que sepamos.</h2>
                <div className={style.inputGroup}>
                    <input
                        className=''
                        type="textarea"
                        name="detalleSalud"
                        value={form.detalleSalud}
                        onChange={handleChange} />
                    {errors.detalleSalud && <div className={style.error}>{errors.detalleSalud}</div>}
                </div>
                <br />

                <h2>Ante una emergencia, ¿a quién podríamos contactar? </h2>
                <div className={style.inputGroup}>

                    <input
                        className=''
                        type="text"
                        name="nombreEmergencia"
                        value={form.nombreEmergencia}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="nombreEmergencia">Nombre:</label>
                    {errors.nombreEmergencia && <div className={style.error}>{errors.nombreEmergencia}</div>}
                </div>

                <div className={style.container_inputPhone}>

                    <PhoneNumberValidation
                        name="codAreaEmergencia"
                        value={form.codAreaEmergencia}
                        onChange={(cod) => handleChange(cod, "codAreaEmergencia")}
                    />
                    <div className={style.inputGroup}>

                        <input
                            type="text"
                            name="telefonoEmergencia"
                            value={form.telefonoEmergencia}
                            onChange={handleChange}
                            required />
                        <label htmlFor="telefonoEmergencia">	Teléfono (Con código de país)</label>
                        {errors.telefonoEmergencia && <div className={style.error}>{errors.telefonoEmergencia}</div>}
                    </div>
                </div>
                <br />

                <h2>Alimentacion</h2>
                <h2>Selecciona una opción:</h2>
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="esCeliaco"
                            id='esCeliaco'
                            checked={form.esCeliaco}
                            onChange={handleChange}
                        />
                        <label htmlFor="esCeliaco" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>
                    </div>
                    <p> Es Celiaco</p>
                </div>
                <br />
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="esDiabetico"
                            id='esDiabetico'
                            checked={form.esDiabetico}
                            onChange={handleChange}
                        />
                        <label htmlFor="esDiabetico" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>

                    </div>
                    <p>Es Diabetico</p>
                </div>
                <br />
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="esVegetariano"
                            id='esVegetariano'
                            checked={form.esVegetariano}
                            onChange={handleChange}
                        />
                        <label htmlFor="esVegetariano" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>
                    </div>
                    <p> Es Vegetariano</p>
                </div>
                <br />
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="Otra"
                            id='Otra'
                            checked={form.Otra}
                            onChange={handleChange}
                        />
                        <label htmlFor="Otra" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>

                    </div>
                    <p>Otra</p>
                </div>
                <br />

                {form.Otra && (
                    <div className={style.inputGroup}>

                        <input
                            className=''
                            type="text"
                            name="detalleAlimentacion "
                            id='detalleAlimentacion'
                            value={form.detalleAlimentacion}
                            onChange={handleChange}
                        />
                        <label htmlFor="detalleAlimentacion "> Especifique los detalles de alimentacion.</label>
                    </div>
                )}

                <h2>Otros Datos :</h2>
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="participoCimaday"
                            id='participoCimaday'
                            checked={form.participoCimaday}
                            onChange={handleChange}
                        />
                        <label htmlFor="participoCimaday" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>
                    </div>
                    <p>Participo en Cima Day</p>
                </div>
                <br />
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="participoPrisma"
                            id='participoPrisma'
                            checked={form.participoPrisma}
                            onChange={handleChange}
                        />
                        <label htmlFor="participoPrisma" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>

                    </div>
                    <p>Participo en Prisma</p>
                </div>
                <br />
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="participoEurovoluntariado"
                            id='participoEurovoluntariado'
                            checked={form.participoEurovoluntariado}
                            onChange={handleChange}
                        />
                        <label htmlFor="participoEurovoluntariado" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>

                    </div>
                    <p>Participo en Eurovoluntariado</p>
                </div>
                <br />
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="participoCima"
                            id='participoCima'
                            checked={form.participoCima}
                            onChange={handleChange}
                        />
                        <label htmlFor="participoCima" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>

                    </div>
                    <p> Participo en Cima</p>
                </div>
                <br />
                <div className={style.cont_Checkbox}>
                    <div className={style.checkbox}>
                        <input
                            type="checkbox"
                            name="participoSigue"
                            id='participoSigue'
                            checked={form.participoSigue}
                            onChange={handleChange}
                        />
                        <label htmlFor="participoSigue" style={{ '--size': '30px' }}>
                            <svg viewBox="0,0,50,50" className="checkbox-icon">
                                <path d="M5 30 L 20 45 L 45 5"></path>
                            </svg>
                        </label>

                    </div>
                    <p> Hice el curso Storyline o Vaya a Movilizar</p>
                </div>
                <br />

                {errors.participacionMovida && <div className={style.error}>{errors.participacionMovida}</div>}
                <button type="submit" disabled={loading}>
                    <div class={style.svg_wrapper}>
                        <div class={style.svg_wrapper}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>{loading ? "Enviando...." : "Enviar"}</span>
                </button>

            </form>
        </div>
    );
}

export default RegistroFormulario;