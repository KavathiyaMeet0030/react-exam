
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Componets/Header/Header';
import Login from './Componets/Login/Login';
import Signup from './Componets/Signup/Signup';


function App() {
  return (
    <>
      < Header />
      <Routes>
         <Route path="/Login" element={<Login />} /> 
         <Route path="/Signup" element={<Signup />} />    
        
      </Routes>
    </>
  );
}

export default App;
