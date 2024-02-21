import userContext from './userContext';
import {useState,useEffect} from 'react'
import {io} from 'socket.io-client';                                            //  io - function to create connection to server


const UserState = (props) => {
  
  const host = "http://localhost:5000";                                         // server IP address
  const [activeChats, setactiveChats] = useState([]);
  const [userId,setUserId] = useState("");
  const socket = io('http://localhost:5000');                                   //  Creating a socket connection synchronously with the server IP address and it returns a socket object.
  
  
  // useEffect function with userId(loggedIn user) dependency
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
  

  // Function to emit message for successful socket connection
  const sendMessage = () => {
    socket.emit('client-connection', 'Socket is established !!');
  };
  

  //  Function to get list of users the client cummunicated earlier.
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


  // Function to get all chat messages of a particular reciever
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


  // Function to save message sent by sender to reciever in the database

  const saveMessage = async (senderId,recieverId,msgType,data,side,time) => {

    try{
      console.log(data);
      const response = await fetch(`${host}/api/auth/saveMessage`, {
        method: "POST",
        headers: {
          "content-type" : "application/json",
          "data" : data
        },
        body: JSON.stringify({senderId,recieverId,msgType,side,time})
      });

      const json = await response.json();
      console.log(json);
    }
    catch(error){
      console.log("Error in saveMessage");
    }
  }


  return(
        <userContext.Provider value={{socket,activeChats,getActiveChats,userId,setUserId,saveMessage,getChatMessages}}>   
            {props.children}
        </userContext.Provider>
    );
}


export default UserState;