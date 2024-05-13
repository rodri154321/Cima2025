import React, { useState } from 'react'
import getApiCountry from '../utils/getApiCountry';

const useForm = (initialData, dataCountry, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [filterCountry, setFilterCountry] = useState([]);
    const [filterCountryResidence, setFilterCountryResidence] = useState([]);


    const handleChange = async (event) => {
        const { name, value, checked } = event.target;
        if (name == "nacionalidad" || name == "paisResidencia") {
           
            setFilterCountry([]);
            const result = await dataCountry;
            setForm({ ...form, [name]: value })
            const searchCountry = result.filter(country => {
                if (name == "paisResidencia") {
                    return country.name.common.toLowerCase().startsWith(form.paisResidencia.toLowerCase());
                } else {
                    return country.name.common.toLowerCase().startsWith(form.nacionalidad.toLowerCase());
                }
            });
            if (searchCountry.length > 0) {
                let coutrys = []

                searchCountry.forEach(element => {
                    coutrys.push(element.name.common.toLowerCase())
                });
                if (name == "paisResidencia") {
                    if(coutrys.includes(value)){
                        setFilterCountryResidence([])
                    }
                    else if(value != ""){
                        setFilterCountryResidence(coutrys)
                    }else{
                        setFilterCountryResidence([])
                    }
                  
                } else {
                    if(coutrys.includes(value)){
                        setFilterCountry([])
                    } else if(value != ""){
                        setFilterCountry(coutrys)
                    } else{
                        setFilterCountry([])
                    }
                }
            } else {
                // Manejar el caso en que no se encuentren países que coincidan con el filtro
                console.log("No se encontraron países que coincidan con el filtro.");
            }
        }
        else if (name === "esAlergico" || name === "tieneMedicacion" || name === "esVegetariano" || name === "esDiabetico" || name === "esCeliaco" || name === "Otra" || name === " participoCimaday" || name ==="participoPrisma" || name ==="participoEurovoluntariado" || name ==="participoCima" || name ==="participoSigue") {
            const isChecked = event.target.checked;
            setForm({ ...form, [name]: isChecked ? true : false });
  
        }else{
            setForm({ ...form, [name]: value });
        }
    };
    const handleSubmit = async (event) => {

        event.preventDefault();
        console.log(form, "aa")
        const err = onValidate(form)

        if (Object.keys(err).length === 0) {
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
                    setLoading(false)
                    console.log('Datos enviados correctamente');
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

    return { filterCountry, filterCountryResidence, form,setForm,setFilterCountry,setFilterCountryResidence,errors, loading, handleSubmit, handleChange }
}

export default useForm
