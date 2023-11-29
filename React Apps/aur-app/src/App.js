import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home';
import LoggedIn from './Components/LoggedIn';
import Login from './Components/Login';

function App() {

  const [userName, setUserName] = useState("");
  // const [aciveUser, setAciveUser] = useState("");
  
  return (
    <Router>

      <div className='flex app-window' style={{borderRadius:"1rem"}}>
        
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login userName={userName} setUserName={setUserName}/>}/>          
          <Route exact path='/loggedIn/*' element={<LoggedIn userName={userName} setUserName={setUserName}/>}/>
        </Routes>

      </div>
   
    </Router>
  );
}

export default App;
