import './App.css';
import Navbar from './Components/Navbar';
import Analyzer from './Components/Analyzer'
import { useState } from 'react';
import Alert from './Components/Alert'
// import { FaAngleRight } from "react-icons/fa";

function App() {

  const [mode,setMode] = useState('dark');
  const [alert,setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);

    setTimeout(() => {
      setAlert(null);
    },1000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#635959';
      showAlert("Dark mode!");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#e2dcdc';
      showAlert("Light mode!");

    }
  }

  return(
          <>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Analyzer mode={mode} showAlert={showAlert}/>
          </>
  );

}

export default App;
