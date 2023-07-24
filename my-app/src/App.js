import './App.css';
import Navbar from './Components/Navbar';
import Analyzer from './Components/Analyzer'
import { useState } from 'react';
import Alert from './Components/Alert'
// import { FaAngleRight } from "react-icons/fa";

function App() {

  const [mode,setMode] = useState('dark');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
        msg: message,
        type: type
      });
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#635959';
      showAlert("Dark mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");

    }
  }

  return(
          <>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Analyzer mode={mode} Alert={showAlert}/>
          </>
  );

}

export default App;
