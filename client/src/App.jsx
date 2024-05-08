import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom';
import Landing from './Views/Landing/Landin';
import UserSection from './Views/userSection/UserSection';


function App() {

  const {pathname} = useLocation();

  return (
    <div className="App">
      {/* {pathname !== '/' ? <NavBar/> : ""} */}
      <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/user' element={<UserSection/>}/>
         </Routes>
    </div>
  )
}

export default App
