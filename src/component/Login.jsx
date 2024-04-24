import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import decodeJwt from '../utils/decodeJwt';


const Login = () => {

  const [email, setEmail] = useState(null)
  const handleGoogleLogin = async (CredentialsResponse) => {
    if (CredentialsResponse.credential) {
      const { payload } = decodeJwt(CredentialsResponse.credential);
      console.log("respuesta", payload)
      setEmail(payload.email);
    }
  }
  const handleGoogleError = (error) => {
    console.error('Error al iniciar sesión con Google:', error);
  }
  return (
    <div>
      {email === null && (
        <GoogleLogin
          useOneTap
          onSuccess={handleGoogleLogin}
          onError={handleGoogleError}
        />)}
      {email && <p>El usuario ah iniciado secion: {email}</p>}
    </div>
  );
};

export default Login;