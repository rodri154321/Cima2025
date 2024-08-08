import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const ID_client = "428745150462-btmvuhhlroon31k9m60td24e5n94t6in.apps.googleusercontent.com";//localHost
// const ID_client = "887056439789-ssvas693qmnuff2du2gf0balthrkllmd.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
   <GoogleOAuthProvider clientId={ID_client}>
    <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
  
)
