import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import NoteState from './context/notes/NoteState'
import Alert from './Components/Alert';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <Alert/>
        <div className="container">
          <Routes>
            <Route path='/'       element={<Home/>}  />
            <Route path='/About'  element={<About/>} />
          </Routes>
        </div>      
      </Router>
    </NoteState>
    </>
  );
}

export default App;
