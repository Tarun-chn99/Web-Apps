import React,{ useState,useEffect} from 'react'
import UserWindow from './UserWindow';
import ChatsPanel from './ChatsPanel'
import { Routes, Route } from 'react-router-dom';


const LoggedIn = (props) => {

  const [activeReciever, setactiveReciever] = useState({name:"",recieverId:""});
  return (
    <>
        <ChatsPanel userName={props.userName} setactiveReciever ={setactiveReciever}/>
        <Routes>
          <Route  exact path = '/'     element={<UserWindow load="home"/>}  />
          <Route  exact path = '/user' element={<UserWindow load="user" reciever={activeReciever}/>}  />
        </Routes>
    </>
  )
}

export default LoggedIn;