import userContext from './userContext';
import {useState} from 'react'

const UserState = (props) => {
  
  const host = "http://localhost:5000";
  const [activeChats, setactiveChats] = useState([]);
  const [userId,setUserId] = useState("");
  
  const getActiveChats = async (uid) => {

    try{
        const response = await fetch(`${host}/api/auth/getActiveChats`,{
        method:'GET',
        headers:{
            "content-type" : "application/json",
            "uid" : `${uid}`
        }
    });
    const json = await response.json();
    setactiveChats(json);
    }
    catch(error){
        console.log("Error in getActiveChats");
    }
  }

  const getChatMessages = async (recieverId) => {

    try{
        const response = await fetch(`${host}/api/auth/getChatMessages`,{
            method: "GET",
            headers: {
                "content-type" : "application/json",
                "recieverId" : `${recieverId}`
            }
        });
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.log("Error in getChatMessages");
    }
  }

  const saveMessage = async (sender,reciever,msg) => {

    try{

        const response = await fetch(`${host}/api/auth/saveMessage`,{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify({sender,reciever,msg})
        });
        const json = await response.json();
        console.log(json);

    }
    catch(error){
        console.log("Error in saveMessge");
    }
  }


  return(
        <userContext.Provider value={{activeChats,getActiveChats,userId,setUserId,saveMessage,getChatMessages}}>
            {props.children}
        </userContext.Provider>
    );
}


export default UserState;