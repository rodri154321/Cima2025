import React, { useState } from 'react'

const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "dietaryPreferences" || name === "cima") {
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
        const err = onValidate(form)

        if (Object.keys(err).length === 0) {
            setLoading(true)
            try {
                const response = await fetch('/api/submit', {
                  method: 'POST',
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

    return { form, errors, loading, handleSubmit, handleChange }
}

export default useForm
