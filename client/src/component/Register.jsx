import React, { useState } from 'react';
import { redirect } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import decodeJwt from '../utils/decodeJwt';
import serviceRegister from "../utils/serviceResgister.js"


const Register = () => {
  const [emailGoogle, setEmailGoogle] = useState(null)
  const [user, setUser] = useState(null)
  const handleGoogleLogin = async (response) => {
    if (response.credential) {
      const {  payload } = decodeJwt(response.credential)
      try {
        const loginResponse = await serviceRegister.register({
          emailGoogle: payload.email,
          password: payload.sub
        });
        if (loginResponse.user) {
          setUser(loginResponse.user);
          setEmailGoogle(payload.email);
        } else {
          console.error('Inicio de sesión fallido: no se pudo obtener el usuario');
        }
      } catch (error) {
        console.error('Error al iniciar sesión con el servicio de autenticación:', error);
      }
    }
  }
  const handleGoogleError = (error) => {
    console.error('Error al iniciar sesión con Google:', error);
  }
  return (
    <div>
      {emailGoogle === null && (
        <GoogleLogin
          useOneTap
          onSuccess={handleGoogleLogin}
          onError={handleGoogleError}
        />)}
      {emailGoogle && redirect("/user")}
    </div>
  );
};

export default Register;