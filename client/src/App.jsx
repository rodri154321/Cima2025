import './App.css'
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Landing from './Views/Landing/Landin';
import Inscripciones from './Views/Inscripciones/Inscripciones';
import Googlelogin from './Views/GoogleLogin/Googlelogin';
import Googleregister from './Views/GoogleRegister/Googleregister';
import UserSection from './Views/userSection/UserSection';
import UserDashboard from './Views/UserDashboard/UserDashboard';
import LoginAdmin from './Views/Admin/LoginAdmin';
import AdminDashboard from './Views/Admin/AdminDashboard'
import { useEffect, useState } from 'react';
import PregFrecuentes from './Views/PregFrecuentes/PregFrecuentes';
import Experimenta from './Views/Experimenta/Experimenta';
import UserExperimenta from './Views/Experimenta/UserExperimenta';
import InfoImportanteExperimenta from './Views/Experimenta/InfoImportanteExperimenta';
import FormExperimenta from './component/FormExperimenta/FormExperimenta';
import NewInscripciones from './Views/Inscripciones/NewInscripciones';



function App() {

  const {pathname} = useLocation();

  const navigate = useNavigate();
  

  return (
    <div className="App">
      
      {/* {pathname !== '/' ? <NavBar/> : ""} */}
      <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/newinscripciones' element={<Inscripciones/>}/>
            <Route path='/inscripciones' element={<NewInscripciones/>}/>
            <Route path='/login' element={<Googlelogin/>}/>
            <Route path='/register' element={<Googleregister/>}/>
            <Route path='/user' element={<UserSection/>}/>
            <Route path='/dashboard' element={<UserDashboard/> }/>
            <Route path='/loginadminsregional25' element={<LoginAdmin/>}/>
            <Route path='/dashboardadminsregional25' element={<AdminDashboard/>}/>
            <Route path='/preguntasfrecuentes' element={<PregFrecuentes/>}/>
            <Route path='/infoexperimenta' element={<Experimenta/>}/>
            <Route path='/dashboardexperimenta' element={<UserExperimenta/>}/>
            <Route path='/infoimportanteexperimenta' element={<InfoImportanteExperimenta/>}/>
            <Route path='/formexperimenta' element={<FormExperimenta/>}/>
         </Routes>
    </div>
  )
}

export default App
