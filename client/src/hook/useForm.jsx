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
        }

        else {

            const { name, value, checked } = event.target;
            if (name == "nacionalidad" || name == "paisResidencia") {

                setFilterCountry([]);
                const result = await dataCountry;
                setForm({ ...form, [name]: value })

                const searchCountry = result.filter(country => {
                    if (name == "paisResidencia") {
                        return country.countryName.toLowerCase().startsWith(form.paisResidencia.toLowerCase());
                    } else {
                        return country.countryName.toLowerCase().startsWith(form.nacionalidad.toLowerCase());
                    }
                });
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
         
            }else if (name === "esAlergico" || name === "tieneMedicacion" || name === "esVegetariano" || name === "esDiabetico" || name === "esCeliaco" || name === "Otra" || name === "participoCimaday" || name === "participoPrisma" || name === "participoEurovoluntariado" || name === "participoCima" || name === "participoSigue") {
                const isChecked = event.target.checked;
                setForm({ ...form, [name]: isChecked ? true : false });
                if (name === "esAlergico" && !checked) {
                    setForm({ ...form, ["detalleAlergia"]:"",[name]: isChecked ? true : false })
                }
                else if (name === "tieneMedicacion" && !checked) {
                    setForm({ ...form, ["detalleMedicacion"]:"",[name]: isChecked ? true : false })  
                }
                else if (name === "Otra" && !checked) {
                    setForm({ ...form, ["detalleAlimentacion"]:"",[name]: isChecked ? true : false }) 
                }

            }else if(name === "progPastor") {
                const isChecked = event.target.checked;
                setForm({ ...form, [name]: isChecked ? true : false });
            }  else if (name === "fechaNacimiento") {
                setForm({ ...form, [name]: value });

            } else if (name === "detalleAlimentacion") {
                setForm({ ...form, [name]: value });
            } else if (name === "detalleMedicacion") {
                setForm({ ...form, [name]: value });
            } else if (name === "detalleAlergia") {
                setForm({ ...form, [name]: value });
            } else {
                setForm({ ...form, [name]: value });
            }
        }
    };

    const armarTelefono = () => {
        // setForm({ ...form, telefonoPastor: "+54" + form.telefonoPastor })
        // setForm({ ...form, telefono: "+" + form.codAreaUser + " " + form.telefono })
        // setForm({ ...form, telefonoEmergencia: "+" + form.codAreaEmergencia + " " + form.telefonoEmergencia })
        let telUser = "+"+form.codAreaPastor + " " + form.telefono;
            let telPastor =  "+"+form.codAreaPastor + " " + form.telefonoEmergencia;
            let telEmerg = "+"+form.codAreaPastor + " " + form.telefonoPastor;
        setForm({
            ...form,
            telefono: telUser,
            telefonoEmergencia: telPastor,
            telefonoPastor: telEmerg,
          });
    }
    //validacion de errores
    const onValidate = (form) => {

        const regexCaractersName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]{3,}$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const dateRegex = / ^\d{4}-\d{2}-\d{2}$/;
        const regexTel = /^\+(?:[0-9\s]){6,16}$/
        const regexCodArea = /^(?!(?:.*\d){4})\d{1,2}(?:\s?\d{1,2})*$/;
        const regexCaracterProv = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s.]{3,}$/;
        let errors = {};
        setErrors({})
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
       
        if (!form.telefonoPastor) {
            errors.telefonoPastor = "Debe ingresar un numero telefonico";
        } else if (form.telefonoPastor ) {
            if (!regexTel.test(form.telefonoPastor)) {
                errors.telefonoPastor = "Numero de teléfono debe cumplir con el formato permitido, ej.+58 (número telefónico)"
            }
        }
        if (!form.telefono) {
            errors.telefono = "Debe ingresar un numero telefonico";
        } else if (form.telefono ) {
            if (!regexTel.test(form.telefono)) {
                errors.telefono = "Numero de teléfono debe cumplir con el formato permitido, ej.+58 (número telefónico)"
            }
        }
        if (!form.telefonoEmergencia) {
            errors.telefonoEmergencia = "Debe ingresar un numero telefonico";
        } else if (form.telefonoEmergencia ) {
            if (!regexTel.test(form.telefonoEmergencia)) {
                errors.telefonoEmergencia = "Numero de teléfono debe cumplir con el formato permitido, ej.+58 (número telefónico)"
            }
        }
     if( Object.keys(errors).length != 0){
        errors.aviso = "Algunos campos contienen errores"
     }
       

        return errors
    }
   
    const handleSubmit = async (event) => {

        event.preventDefault();
        const err = onValidate(form)
        if (err && Object.keys(err).length === 0) {
        }
        
        if (err && Object.keys(err).length === 0) {
            // armarTelefono()
            setLoading(true)
            try {
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
                setLoading(false)
            }

        } else {
            setErrors(err)
        }
    }

    return { filterCountry, filterProvinces, filterCountryResidence, form, setForm, onValidate, setFilterCountry, setFilterProvinces, setFilterCountryResidence, errors, loading, handleSubmit, handleChange }
}

export default useForm
