import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import decodeJwt from '../utils/decodeJwt';
import serviceLogin from "../utils/serviceLogin.js"
import Swal from 'sweetalert2'


const Login = () => {
  const [emailGoogle, setEmailGoogle] = useState(null)
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
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
          Swal.fire({
            title: "Error",
            text: error,
            icon: "error"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/inscripciones');
            }
          });
        }
      } catch (error) {
        console.error('Error al iniciar sesión con el servicio de autenticación:', error);
        Swal.fire({
          title: "Error",
          text: error,
          icon: "error"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/inscripciones');
          }
        });
      }
    }
  }
  const handleGoogleError = (error) => {
    console.error('Error al iniciar sesión con Google:', error);
    Swal.fire({
      title: "Error",
      text: error,
      icon: "error"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/inscripciones');
      }
    });
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