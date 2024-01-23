import React,{useEffect, useState} from 'react'
import UserWindow from './UserWindow';
import ChatsPanel from './ChatsPanel'
import { Routes, Route } from 'react-router-dom';


const LoggedIn = (props) => {

  const [activeReciever, setactiveReciever] = useState("");
  return (
    <>
        <ChatsPanel userName={props.userName} setactiveReciever ={setactiveReciever}/>
        <Routes>
          <Route  exact path = '/'     element={<UserWindow load="home"/>}  />
          <Route  exact path = '/user' element={<UserWindow load="user" userName={activeReciever}/>}  />
        </Routes>
    </>
  )
}

export default LoggedIn;