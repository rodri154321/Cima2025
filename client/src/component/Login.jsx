import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import decodeJwt from '../utils/decodeJwt';
import serviceLogin from "../utils/serviceLogin.js"


const Login = () => {
  const [emailGoogle, setEmailGoogle] = useState(null)
  const [user, setUser] = useState(null)
  const handleGoogleLogin = async (reponse) => {
    if (reponse.credential) {
      const { payload } = decodeJwt(reponse.credential)
      try {
        const loginResponse = await serviceLogin.login({
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
      {emailGoogle && <p>El usuario ah iniciado secion: {emailGoogle}</p>}
    </div>
  );
};

export default Login;