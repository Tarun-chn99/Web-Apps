import React, { useState,useContext } from 'react'
import userContext from '../context/userContext';

const ChatWindow = (props) => {

    const context = useContext(userContext);
    const {userId,saveMessage} = context;
    const [text, setText] = useState("");
    const {recieverId,chat} = props.reciever;

    const onchange = (e) => {
        setText(e.target.value);
    }

    // useEffect(() => {
    //     return () => {
    //         const chat_screen = document.querySelector("#chat-screen");
    //         chat_screen.innerHTML = "";   
    //     }

    // },[msg]);

    const createMessage = (e) => {
        e.preventDefault();
        const chat_screen = document.querySelector("#chat-screen");
        chat_screen.innerHTML += `<span class="msg">${text}</span>`;
        // setindex(index+1);
        saveMessage(userId,recieverId,text);
        setText("");
    }

    return (
    
    <>
        <div id="chat-screen">
            {chat.map((val,index) => {
                // console.log("Iniside map");
                // setindex(index+1);
                return <span className="msg" key={index}>{val}</span>
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