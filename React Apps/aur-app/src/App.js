import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import LoggedIn from './Components/LoggedIn';
import LoginForm from './Components/LoginForm';
import UserState from './context/UserState';
import {io} from 'socket.io-client';

function App() {

  const socket = io('http://localhost:5000');
  const [userName, setUserName] = useState("");  

  useEffect(() => {

    sendMessage();
    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);
  
  const sendMessage = () => {
    socket.emit('chat-message', 'Hello, Server!');
  };

  return (
    <UserState socket={socket}>
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
