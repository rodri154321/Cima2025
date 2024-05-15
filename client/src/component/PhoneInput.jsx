import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import "./PhoneNumberValidation.css"

function PhoneNumberValidation({ value, onChange }) {
    const handlePhoneChange = (phoneNumber) => {
        onChange(phoneNumber); // Llamar a la función onChange con el nuevo número de teléfono
      };
    return (
        <div className="container">
            <div className="phone-input-container">
                <label >

                    <PhoneInput
                       
                        placeholder="Ej:+54"
                        value={value}
                        onChange={handlePhoneChange}
                        inputProps={{ maxLength: 4 }}
                    />
                </label>
                {/* {!valid && <p>Revisar</p>} */}
            </div>
        </div>
    )
}

export default PhoneNumberValidation