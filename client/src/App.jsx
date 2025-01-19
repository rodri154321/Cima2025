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
import Speakers from './Views//Speakers/Speakers'
import Talleres from './Views/InscripcionTalleres/InscTalleres';
import DiaUno from './Views/CimaNews/DiaUno/DiaUno';
import DiaDos from './Views/CimaNews/DiaDos/DiaDos';
import Spoiler from "./Views/Spoiler/Spoiler"
import CarpetaDelParticipante from './Views/CarpetaDelParticipante/CarpetaDelParticipante';
import CarpetaParticipante from './Views/CarpetaDelParticipante/CarpetaParticipante';
import LoaderCimanews from './component/Loaders/LoaderCimanews';
import DescProgAct from './Views/CarpetaDelParticipante/visoresCarpeta/descprogact';
import OperacionCima from './Views/CarpetaDelParticipante/visoresCarpeta/operacionCima';
import AtencionMedica from './Views/CarpetaDelParticipante/visoresCarpeta/atencionMedica';
import Movida from './Views/CarpetaDelParticipante/visoresCarpeta/movida';
import TiendaMovida from './Views/CarpetaDelParticipante/visoresCarpeta/tiendamovida';


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
            <Route path='/oradores' element={<Speakers/>}/>
            <Route path='/taller' element={<Talleres/>}/>
            <Route path='/cimanews' element={<LoaderCimanews/>}/>
            <Route path='/cimanews1' element={<DiaUno/>}/>
            <Route path='/spoiler' element={<Spoiler/>}/>
            <Route path='/cimanews2' element={<DiaDos/>}/>


            {/* ------------------------CARPETA PARTICIPANTE------------------------ */}

            <Route path='/carpetadelparticipante' element={<CarpetaDelParticipante/>}/>
            <Route path='/carpetaparticipante' element={<CarpetaParticipante/>}/>
            <Route path='/carpetaparticipante/descprogact' element={<DescProgAct/>}/>
            <Route path='/carpetaparticipante/movida' element={<Movida/>}/>
            <Route path='/carpetaparticipante/operacioncima' element={<OperacionCima/>}/>
            <Route path='/carpetaparticipante/tiendamovida' element={<TiendaMovida/>}/>
            <Route path='/carpetaparticipante/experimenta' element={<DescProgAct/>}/>
            <Route path='/carpetaparticipante/progpastores' element={<OperacionCima/>}/>
            <Route path='/carpetaparticipante/oradores' element={<AtencionMedica/>}/>
            <Route path='/carpetaparticipante/plenariasgenerales' element={<DescProgAct/>}/>
            <Route path='/carpetaparticipante/vueltaacasa' element={<OperacionCima/>}/>
            <Route path='/carpetaparticipante/atencionmedica' element={<AtencionMedica/>}/>
            
         </Routes>
    </div>
  )
}

export default App
