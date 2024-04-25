import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom';
import Landing from './Views/Landing/Landin';


function App() {

  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname !== '/' ? <NavBar/> : ""}
      <Routes>
            <Route path='/' element={<Landing/>}/>
         </Routes>
    </div>
  )
}

export default App
