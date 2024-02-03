import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import LoggedIn from './Components/LoggedIn';
import LoginForm from './Components/LoginForm';
import UserState from './context/UserState';
// import {io} from 'socket.io-client';                                            //  io - function to create connection to server


function App() {
  
  // const socket = io('http://localhost:5000');                                   //  Creating a socket connection synchronously with the server IP address and it returns a socket object.
  const [userName, setUserName] = useState("");  

  // socket.on('connect', () => {
  //   console.log('Socket connected!');
  //   sendMessage();
  // });

  // useEffect(() => {
  //   return () => {
  //     console.log("Socket disconnected");
  //     socket.disconnect();                                                       //  Socket is disconnected once the component is unmounted.
  //   };
  //   // eslint-disable-next-line
  // }, []);
  
  // const sendMessage = () => {
  //   socket.emit('client-connection', 'Socket is established !!');
  // };

  return (
    <UserState>
      <Router>

        <div className='flex app-window' style={{borderRadius:"1rem"}}>
          
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<LoginForm userName={userName} setUserName={setUserName}/>}/>          
            <Route exact path='/loggedIn/*' element={<LoggedIn userName={userName} setUserName={setUserName}/>}/>
          </Routes>

        </div>
    
      </Router>
    </UserState>
  );
}

export default App;
