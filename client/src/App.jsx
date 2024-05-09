import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom';
import Landing from './Views/Landing/Landin';
import Inscripciones from './Views/Inscripciones/Inscripciones';
import Googlelogin from './Views/GoogleLogin/Googlelogin';
import Googleregister from './Views/GoogleRegister/Googleregister';


function App() {

  const {pathname} = useLocation();

  return (
    <div className="App">
      {/* {pathname !== '/' ? <NavBar/> : ""} */}
      <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/inscripciones' element={<Inscripciones/>}/>
            <Route path='/login' element={<Googlelogin/>}/>
            <Route path='/register' element={<Googleregister/>}/>
         </Routes>
    </div>
  )
}

export default App
