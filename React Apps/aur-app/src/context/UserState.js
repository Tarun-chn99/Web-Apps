import userContext from './userContext';
import {useState,useEffect} from 'react'
import {io} from 'socket.io-client';                                            //  io - function to create connection to server


const UserState = (props) => {
  
  const host = "http://localhost:5000";
  const [activeChats, setactiveChats] = useState([]);
  const [userId,setUserId] = useState("");
//   const {socket} = props;

  const socket = io('http://localhost:5000');                                   //  Creating a socket connection synchronously with the server IP address and it returns a socket object.
  
  useEffect(() => {
    
    socket.on('user-connect', (val,callback) => {
        console.log(val);
        sendMessage();
        callback({status:"User-connect event recieved"});
        if(userId !== "")
        socket.emit('setUserId', `${userId}`);
      });
    
    return () => {
      console.log("Socket disconnected");
      socket.disconnect();                                                       //  Socket is disconnected once the component is unmounted.
    };
    // eslint-disable-next-line
  }, [userId]);
  

  const sendMessage = () => {
    socket.emit('client-connection', 'Socket is established !!');
  };
  
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
        return json;
    }
    catch(error){
        console.log("Error in getChatMessages");
    }
  }

  const saveMessage = async (sender,reciever,msg,side,time) => {

    try{
        const response = await fetch(`${host}/api/auth/saveMessage`,{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify({sender,reciever,msg,side,time})
        });
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.log("Error in saveMessge");
    }
  }


  return(
        <userContext.Provider value={{socket,activeChats,getActiveChats,userId,setUserId,saveMessage,getChatMessages}}>
            {props.children}
        </userContext.Provider>
    );
}


export default UserState;