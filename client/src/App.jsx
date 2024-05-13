import './App.css'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Landing from './Views/Landing/Landin';
import Inscripciones from './Views/Inscripciones/Inscripciones';
import Googlelogin from './Views/GoogleLogin/Googlelogin';
import Googleregister from './Views/GoogleRegister/Googleregister';
import UserSection from './Views/userSection/UserSection';
import UserDashboard from './Views/UserDashboard/UserDashboard';



function App() {

  const {pathname} = useLocation();

  const navigate = useNavigate();
  const dashboard = localStorage.getItem('user');

  return (
    <div className="App">
      
      {/* {pathname !== '/' ? <NavBar/> : ""} */}
      <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/inscripciones' element={<Inscripciones/>}/>
            <Route path='/login' element={<Googlelogin/>}/>
            <Route path='/register' element={<Googleregister/>}/>
            <Route path='/user' element={<UserSection/>}/>
            <Route path='/dashboard' element={dashboard && dashboard.preinscripto ? <UserDashboard /> : <UserSection navigate={navigate}/>}/>
         </Routes>
    </div>
  )
}

export default App
