import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <>
      <Router>
        
        <Navbar/>
        <Routes>
          <Route path='/'       element={<Home/>}  />
          <Route path='/Home'   element={<Home/>}  />
          <Route path='/About'  element={<About/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
