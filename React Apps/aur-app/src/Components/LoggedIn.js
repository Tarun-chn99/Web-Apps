import React,{ useState,useEffect} from 'react'
import UserWindow from './UserWindow';
import ChatsPanel from './ChatsPanel'
import { Routes, Route } from 'react-router-dom';


const LoggedIn = (props) => {

  const [activeReciever, setactiveReciever] = useState({name:"",recieverId:"",chat:[]});
  const [flag,setFlag] = useState(0);

  const setReciever = (name,recieverId,chat) => {
    setactiveReciever({name:name,recieverId:recieverId,chat:chat});
    setFlag(0);
  }

  useEffect(()=>{
    setFlag(1);
  },[activeReciever]);

  return (
    <>
        <ChatsPanel userName={props.userName} setReciever ={setReciever}/>
        <Routes>
          {
            flag === 0 ?  <Route  exact path = '/home'     element={<UserWindow load="home"/>}  />
            : <Route  exact path = '/user' element={<UserWindow load="user" reciever={activeReciever}/>}  />
          }
        </Routes>
    </>
  )
}

export default LoggedIn;