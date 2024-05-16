import React, { useState } from 'react'

import getApiProvinces from '../utils/getApiProvince';
import searchCountryId from "../utils/getApiCountryID"
import isValidateAge from "../utils/validateEdad"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'




const useForm = (initialData, dataCountry) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [filterCountry, setFilterCountry] = useState([]);
    const [filterCountryResidence, setFilterCountryResidence] = useState([]);
    const [filterProvinces, setFilterProvinces] = useState([]);

    const navigate = useNavigate();

    const handleChange = async (event, dato) => {
        if (dato === "fechaNacimiento") {

            const value = event.getFullYear() + '/' + (event.getMonth() + 1) + '/' + event.getDate();
            setForm({ ...form, [dato]: value });

        }
        else if (dato === "codAreaPastor" || dato === "codAreaUser" || dato === "codAreaEmergencia") {
            setForm({ ...form, [dato]: event })
            console.log("-", form.codAreaPastor, "-pastor")
            console.log("-", form.codAreaUser, "-user")
            console.log("-", form.codAreaEmergencia, "-emer g")
        }

        else {

            const { name, value, checked } = event.target;

            if (name == "nacionalidad" || name == "paisResidencia") {

                setFilterCountry([]);
                const result = await dataCountry;
                setForm({ ...form, [name]: value })
                console.log("result", result)
                const searchCountry = result.filter(country => {
                    if (name == "paisResidencia") {
                        return country.countryName.toLowerCase().startsWith(form.paisResidencia.toLowerCase());
                    } else {
                        return country.countryName.toLowerCase().startsWith(form.nacionalidad.toLowerCase());
                    }
                });
                console.log("searchCountry", searchCountry)

                if (searchCountry.length > 0) {
                    let coutrys = []

                    searchCountry.forEach(element => {
                        coutrys.push(element.countryName)
                    });
                    if (name == "paisResidencia") {
                        if (coutrys.includes(value)) {
                            setFilterCountryResidence([])
                        }
                        else if (value != "") {
                            setFilterCountryResidence(coutrys)
                        } else {
                            setFilterCountryResidence([])
                        }

                    } else {
                        if (coutrys.includes(value)) {
                            setFilterCountry([])
                        } else if (value != "") {
                            setFilterCountry(coutrys)
                        } else {
                            setFilterCountry([])
                        }
                    }
                } else {
                    // Manejar el caso en que no se encuentren países que coincidan con el filtro
                    console.log("No se encontraron países que coincidan con el filtro.");
                }
            }
            else if (name == "telefonoPastor") {
                if (!errors.telefonoPastor && form.codAreaPastor && /^\+(?:[0-9\s]){6,14}$/.test(value)) {
                    let finalPhone = form.codAreaPastor + " " + value;
                    setForm({ ...form, [name]: finalPhone })
                }
                else {
            let telPastor =  "+"+form.codAreaPastor + " " + form.telefonoEmergencia;
            setForm({ ...form, telefonoEmergencia: telPastor})
        
                }

            }
            else if (name == "telefono") {
                if (!errors.telefono && form.codAreaUser && /^\+(?:[0-9\s]){6,14}$/.test(value)) {
                    let finalPhone = form.codAreaUser + " " + value;
                    setForm({ ...form, [name]: finalPhone })
                }
                else {
                    let telUser = "+"+form.codAreaPastor + " " + form.telefono;
                    setForm({ ...form, telefono: telUser })
                 
                  
                }

            }
            else if (name == "telefonoEmergencia") {
                if (!errors.telefonoEmergencia && form.codAreaPastor && /^\+(?:[0-9\s]){6,14}$/.test(value)) {
                    let finalPhone = form.codAreaEmergencia + " " + value;
                    setForm({ ...form, [name]: finalPhone })
                }
                else {
                   
                    let telEmerg = "+"+form.codAreaPastor + " " + form.telefonoPastor;
                   
                    setForm({ ...form, telefonoPastor:telEmerg })
                }

                // }
                //     else if (name == "provincia"){

                //     setFilterProvinces([]);
                //     setForm({ ...form, [name]: value })
                //     if(filterCountry.length === 0 && form.paisResidencia){
                //         const idCountry = await searchCountryId(form.paisResidencia)
                //         console.log(idCountry,"id?")
                //        const provinces= await getApiProvinces(idCountry)
                //        console.log(provinces,"provincias")
                //      const searchProvinces=  provinces.filter(prov =>{ "toponymName"
                //         return prov.name.toLowerCase().startsWith(form.provincia.toLowerCase());
                //        })


                //     // if (searchProvinces.length > 0) {
                //     //     let Prov = []

                //     //     searchProvinces.forEach(element => {
                //     //         Prov.push(element.name.toLowerCase())
                //     //     });
                //     //     setFilterProvinces(Prov)
                //     // }
                // }
            }
            else if (name === "esAlergico" || name === "tieneMedicacion" || name === "esVegetariano" || name === "esDiabetico" || name === "esCeliaco" || name === "Otra" || name === "participoCimaday" || name === "participoPrisma" || name === "participoEurovoluntariado" || name === "participoCima" || name === "participoSigue") {
                const isChecked = event.target.checked;
                setForm({ ...form, [name]: isChecked ? true : false });
            } else if (name === "fechaNacimiento") {
                setForm({ ...form, [name]: value });
                console.log(value, "date")
            } else {
                setForm({ ...form, [name]: value });
            }
        }
    };
    //validacion de errores
    const onValidate = (form) => {

        const regexCaractersName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]{3,}$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const dateRegex = / ^\d{4}-\d{2}-\d{2}$/;
        const regexTel = /^\+?(?:[0-9\s]){6,14}$/;
        const regexCodArea = /^(?!(?:.*\d){4})\d{1,2}(?:\s?\d{1,2})*$/;
        const regexCaracterProv = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s.]{3,}$/;
        let errors = {};
        if (!form.nombre.trim()) {
            errors.nombre = "Debe colocar un nombre";
        } else if (form.nombre) {

            if (!regexCaractersName.test(form.nombre)) {
                errors.nombre = "No debe tener caracteres especiales"
            }
        }
        if (!form.nombreEmergencia.trim()) {
            errors.nombreEmergencia = "Debe colocar un nombre";
        } else if (form.nombreEmergencia) {

            if (!regexCaractersName.test(form.nombreEmergencia)) {
                errors.nombreEmergencia = "No debe tener caracteres especiales"
            }
        }
        if (!form.apellido.trim()) {
            errors.apellido = "Debe colocar un apellido";
        } else if (form.apellido) {

            if (!regexCaractersName.test(form.apellido)) {
                errors.apellido = "No debe tener caracteres especiales"
            }
        }
        if (!form.email.trim()) {
            errors.email = "Debe colocar un Email";
        } else if (form.email) {
            if (!regexEmail.test(form.email)) {
                errors.email = "Debe cumplir con el formato email"
            }
        }
        if (!form.fechaNacimiento) {

            errors.fechaNacimiento = "Debe agregar Fecha de nacimiento";
        } else if (form.fechaNacimiento) {
            console.log(form.fechaNacimiento)
            if (dateRegex.test(form.fechaNacimiento)) {
                errors.fechaNacimiento = "Debe cumplir con el formato yyyy/mm/dd"
            } else if (!isValidateAge(form.fechaNacimiento)) {
                errors.fechaNacimiento = "Debe ser mayor de 14 años"
            }
        }
        if (!form.documento.trim()) {
            errors.documento = "Debe colocar un nombre";
        }
        if (!form.sexo.trim()) {
            errors.sexo = "Debe seleccionar un sexo";
        }
        if (!form.nacionalidad.trim()) {
            errors.nacionalidad = "Debe completar Nacionalidad";
        } else if (form.nacionalidad) {
            if (!regexCaracterProv.test(form.nacionalidad)) {
                errors.nacionalidad = "No debe tener caracteres especiales"
            }
        }
        if (!form.paisResidencia.trim()) {
            errors.paisResidencia = "Debe colocar un nombre";
        } else if (form.paisResidencia) {
            if (!regexCaracterProv.test(form.paisResidencia)) {
                errors.paisResidencia = "No debe tener caracteres especiales"
            }
        }
        if (!form.provincia.trim()) {
            errors.provincia = "Debe colocar un nombre";
        } else if (form.provincia) {
            if (!regexCaracterProv.test(form.provincia)) {
                errors.provincia = "No debe tener caracteres especiales"
            }
        }
        if (!form.ciudad.trim()) {
            errors.ciudad = "Debe colocar un nombre";
        } else if (form.ciudad) {
            if (!regexCaractersName.test(form.ciudad)) {
                errors.ciudad = "No debe tener caracteres especiales"
            }
        }
        if (!form.iglesia.trim()) {
            errors.iglesia = "Debe colocar un nombre";
        } else if (form.iglesia) {
            if (!regexCaractersName.test(form.iglesia)) {
                errors.iglesia = "No debe tener caracteres especiales"
            }
        }
        if (!form.pastor.trim()) {
            errors.pastor = "Debe colocar un nombre";
        } else if (form.pastor) {
            if (!regexCaractersName.test(form.pastor)) {
                errors.pastor = "No debe tener caracteres especiales"
            }
        }
        if (!form.codAreaPastor) {
            errors.telefonoPastor = "Debe ingresar un numero de area";
        } else if (!form.telefonoPastor) {
            errors.telefonoPastor = "Debe ingresar un numero telefonico";
        } else if (form.telefonoPastor && form.codAreaPastor) {
            if (!regexCodArea.test(form.codAreaPastor)) {
                errors.telefonoPastor = "Codigo de area no permitido"
            } else if (!regexTel.test(form.telefonoPastor)) {
                errors.telefonoPastor = "Numero de telefono  no permitido"
            }
        }
        if (!form.codAreaUser) {
            errors.telefono = "Debe ingresar un numero de area";
        } else if (!form.telefono) {
            errors.telefono = "Debe ingresar un numero telefonico";
        } else if (form.telefono && form.codAreaUser) {
            if (!regexCodArea.test(form.codAreaUser)) {
                errors.telefono = "Codigo de area no permitido"
            } else if (!regexTel.test(form.telefono)) {
                errors.telefono = "Numero de telefono  no permitido"
            }
        }

        if (!form.codAreaEmergencia) {
            errors.telefonoEmergencia = "Debe ingresar un numero de area";
        } else if (!form.telefonoEmergencia) {
            errors.telefonoEmergencia = "Debe ingresar un numero telefonico";
        } else if (form.telefonoEmergencia && form.codAreaEmergencia) {
            if (!regexCodArea.test(form.codAreaEmergencia)) {
                errors.telefonoEmergencia = "Codigo de area no permitido"
            } else if (!regexTel.test(form.telefonoEmergencia)) {
                errors.telefonoEmergencia = "Numero de telefono  no permitido"
            }
        }

        return errors
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(form, "aa")
        const err = onValidate(form)
        console.log(err)

        if (err && Object.keys(err).length === 0) {
            
            setLoading(true)
            try {

                console.log(form);
                const response = await fetch('https://cima2025.up.railway.app/login/addInfo', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });

                if (response.ok) {
                    setForm({})
                    setLoading(false)
                    // console.log('Datos enviados correctamente');
                    Swal.fire({
                        icon: "success",
                        title: "User Created",
                        showConfirmButton: false,
                        timer: 2000,
                        background: "#666",
                        color: "#FFFFFF",
                    });
                    navigate('/login');
                } else {
                    console.error('Error al enviar datos');
                    setLoading(false)
                }
            } catch (error) {
                console.error('Error de red:', error);
                console.log(error);
                setLoading(false)
            }

        } else {
            setErrors(err)
        }
    }

    return { filterCountry, filterProvinces, filterCountryResidence, form, setForm, onValidate, setFilterCountry, setFilterProvinces, setFilterCountryResidence, errors, loading, handleSubmit, handleChange }
}

export default useForm
