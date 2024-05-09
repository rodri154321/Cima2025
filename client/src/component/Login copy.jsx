import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import decodeJwt from '../utils/decodeJwt';
import loginService from "../utils/serviceLogin.js"


const Login = () => {

  const [emailGoogle, setEmailGoogle] = useState("")
  const [user, setUser] = useState(null)
  const handleGoogleLogin = async (CredentialsResponse) => {
    if (CredentialsResponse.credential) {

     const { header, payload } = decodeJwt(CredentialsResponse.credential)
      
    const response = await loginService.login({
      emailGoogle:payload.email,
      password:CredentialsResponse.clientID
     })
     if(response){
      setUser(response.user)
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