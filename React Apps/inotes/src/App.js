import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import NoteState from './context/notes/NoteState'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Alert from './Components/Alert';
import { useState,useEffect } from 'react';

function App() {

  const [alert,setAlert] = useState(null);
  
  const showAlert = (message) => {
    setAlert(message);

    setTimeout(() => {
      setAlert(null);
    },1000);
  }
  
  useEffect(() => {
    showAlert("Welcome!");
  }, [])
  

  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path='/'       element={<Home   showAlert={showAlert}/>}  />
            <Route path='/About'  element={<About  showAlert={showAlert}/>}  />
            <Route path='/Login'  element={<Login  showAlert={showAlert}/>}  />
            <Route path='/Signup' element={<Signup showAlert={showAlert}/>}  />
          </Routes>
        </div>      
      </Router>
    </NoteState>
    </>
  );
}

export default App;
