import React, { useState,useContext,useEffect } from 'react'
import userContext from '../context/userContext';

const ChatWindow = (props) => {

    const context = useContext(userContext);
    const {userId,saveMessage,socket} = context;
    const [text, setText] = useState("");
    const {recieverId,chat,name} = props.reciever;
    let reciever_chat = chat;
    const [message,setMessage] = useState(reciever_chat);

    const onchange = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        const messageHandler = (msg, user) => {
           console.log(`Message to ${user}: `, msg);
           console.log("reciever_chat: ", reciever_chat);
           reciever_chat.push({
              message: msg,
              side: 'float-lft'
           });
           setMessage([...reciever_chat]); // Create a new array to trigger re-render
           saveMessage(userId,recieverId,msg,'float-lft');
        };
     
        socket.on('message', messageHandler);
        return () => {
           socket.off('message', messageHandler); // Cleanup when the component is unmounted
        };
     }, [socket, reciever_chat]); 

    const createMessage = (e) => {
        e.preventDefault();
        const chat_screen = document.querySelector("#chat-screen");
        chat_screen.innerHTML += `<span class="msg float-rit">${text}</span>`;
        socket.emit('message',text,recieverId,name);
        saveMessage(userId,recieverId,text,'float-rit');
        setText("");
    }



    return (
    
    <>
        <div id="chat-screen">
            {message.map((val,index) => {
                return <span className={`msg ${val.side}`} key={index}>{val.message}</span>
            })}
        </div>
        <div className='chat-buttons flex bottom-right-corner'>
            
            <button className="ellipsis margin-rit-half grow1"><i className="fa-solid fa-plus txt-white"></i></button>
            <form action="" className='grow10' onSubmit={createMessage}>
                <input className='chat-input-box' type="text" value={text} onChange={onchange}/>
            </form>
            <button className="ellipsis margin-lft-half grow1" onClick={createMessage}><i className="fa-solid fa-arrow-right txt-white"></i></button>
        
        </div>
    </>

  )
}

export default ChatWindow;