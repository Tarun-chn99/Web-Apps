import React from 'react'
import Navbar from './Navbar';
import ChatWindow from './ChatWindow';

const UserWindow = (props) => {
  return (
    <div className="user-window-container">

      {props.load==="home" ? 
      <img src="https://wallpaperaccess.com/full/2224368.png" alt="Background" style={{height:"100%",width:"100%",borderRadius:"1rem"}} />  :
      <>
        <Navbar side="right" userName={props.userName}/>
        <ChatWindow/>
      </>
      }

    </div>
  )
}

export default UserWindow;