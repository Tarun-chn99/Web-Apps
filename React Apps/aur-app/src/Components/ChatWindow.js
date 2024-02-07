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

        socket.on('messageToReciever', (msg, name) => {
            reciever_chat.push({
            message: msg,
            side: 'float-lft'
        });
        console.log(name);
        setMessage([...reciever_chat]);          // Create a new array to trigger re-render
        playNotificationSound();
        saveMessage(userId,recieverId,msg,'float-lft');
        });

        return () => {
            socket.off('messageToReciever');   // Cleanup when the component is unmounted
        };
        //eslint-disable-next-line
    }, [reciever_chat]); 
    

    const createMessage = (e) => {
        e.preventDefault();
        if(text!==""){

            const d = new Date();
            const hour = d.getHours().toString(), minute = d.getMinutes().toString();
            const zone = (d.getHours() >= 12 && d.getMinutes >=0 ? "pm" : "am");
            const time = hour + ":" + minute + " " + zone;

            const chat_screen = document.querySelector("#chat-screen");
            chat_screen.innerHTML += `<div class="msg float-rit" key={index}><div>${text}</div><span class="time float-rit">${time}<i class="fa-solid fa-check" style="color: #000000;margin-left:8px;"></i></span></div>`;

            socket.emit('messageFromSender',text,recieverId,name);
            saveMessage(userId,recieverId,text,'float-rit',time);
            // reciever_chat.push({
            //     message: text,
            //     side: 'float-rit'
            //  });
            //  console.log(reciever_chat);
            setText("");
        }
    }


    function playNotificationSound(){
        const audio = new Audio('../whatsapp.mp3');
        audio.play();
      };

    return (
    
    <>
        <div id="chat-screen">
            {message.map((val,index) => {
                return <div className={`msg ${val.side}`} key={index}>
                        <div>{val.message}</div>
                        <span className="time float-rit">
                            {val.time}
                            <i class="fa-solid fa-check" style={{color: "#000000",marginLeft:"8px"}}></i>
                            {/* <i class="fa-solid fa-check" style={{color: "#d7d0d0"}}></i> */}
                        </span>
                       </div>
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

