import React, { useState } from 'react'
import getApiCountry from '../utils/getApiCountry';

const useForm = (initialData, dataCountry, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [filterCountry, setFilterCountry] = useState([]);
    const handleChange = async (event) => {
        const { name, value, checked } = event.target;
        if (name == "nationality") {
            setFilterCountry([]);
            const result = await dataCountry;
            setForm({ ...form, [name]: value })
            const searchCountry = result.filter(country => {
                return country.name.common.toLowerCase().startsWith(form.nationality.toLowerCase());
            });

            // Manejar los resultados filtrados
            if (searchCountry.length > 0) {
                let coutrys =[]
              
                searchCountry.forEach(element => {
                      coutrys.push(element.name.common.toLowerCase())
                        
                    setFilterCountry(coutrys)
                });
            } else {
                // Manejar el caso en que no se encuentren países que coincidan con el filtro
                console.log("No se encontraron países que coincidan con el filtro.");
            }
        }
        else if (name === "allergies") {
            const isChecked = event.target.checked;
            setForm({ ...form, [name]: isChecked ? true : false });
        }

        else if (name === "medication") {
            const isChecked = event.target.checked;
            setForm({ ...form, [name]: isChecked ? true : false });
        }

        else if (name === "dietaryPreferences" || name === "participacionMovida") {
            if (value === "Otra" || value === "Ninguno" || value == "Ninguna") {
                setForm({ ...form, [name]: [value] });
            } else {
                if (form[name].includes("Otra") || form[name].includes("Ninguno") || form[name].includes("Ninguna")) {
                    setForm({ ...form, [name]: [value] })
                }
                else if (form[name].includes(value)) {
                    setForm({ ...form, [name]: form[name].filter(item => item !== value) });
                } else {
                    setForm({ ...form, [name]: [...form[name], value] });
                }
            }
        } else {
            setForm({ ...form, [name]: value });
        }
    };
    const handleSubmit = async (event) => {
       
        event.preventDefault();
        console.log(form,"aa")
        const err = onValidate(form)

        if (Object.keys(err).length === 0) {
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
                    setLoading(false)
                    console.log('Datos enviados correctamente');
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

    return {filterCountry, form, errors, loading, handleSubmit, handleChange }
}

export default useForm
