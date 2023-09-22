import React from 'react'
import UserWindow from './UserWindow';
import ChatsPanel from './ChatsPanel'
import { Routes, Route } from 'react-router-dom';


const LoggedIn = (props) => {
  return (
    <>
        <ChatsPanel userName={props.userName} setUserName={props.setUserName}/>
        <Routes>
          <Route  exact path = '/'     element={<UserWindow load="home"/>}  />
          <Route  exact path = '/user' element={<UserWindow load="user" userName={props.userName}/>}  />
        </Routes>
    </>
  )
}

export default LoggedIn