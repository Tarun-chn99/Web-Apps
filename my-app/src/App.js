import './App.css';
import Navbar from './Components/Navbar';
import Analyzer from './Components/Analyzer'
// import { useState } from 'react';
// import { FaAngleRight } from "react-icons/fa";

function App() {

  // const [mode,setMode] = useState('light');

  // const toggleMode = () => {
  //   if(mode === 'light')
  //   setMode('dark');
  //   else
  //   setMode('light');
  // }

  return(
          <>
            <Navbar />
            <Analyzer/>
          </>
  );

}

export default App;
