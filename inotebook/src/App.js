import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import NoteState from './context/notes/NoteState'
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/'       element={<Home/>}  />
            <Route path='/About'  element={<About/>} />
            <Route path='/Login'  element={<Login/>} />
            <Route path='/Signup' element={<Signup/>}/>
          </Routes>
        </div>      
      </Router>
    </NoteState>
    </>
  );
}

export default App;
