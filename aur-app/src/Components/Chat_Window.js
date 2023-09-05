import React, { useState } from 'react'

const ChatWindow = () => {

    const [text, setText] = useState("");

    const onchange = (e) => {
        setText(e.target.value);
    }

    const createMessage = (e) => {
        e.preventDefault();
        const chat_screen = document.querySelector("#chat-screen");
        chat_screen.innerHTML += `<span class="msg">${text}</span>`;
        setText("");
    }

    return (
    
    <>
        <div id="chat-screen"></div>
        <div className='chat-buttons flex '>
            
            <button className="ellipsis margin-rit-half grow1"><i class="fa-solid fa-plus txt-black"></i></button>
            <form action="" className='grow10' onSubmit={createMessage}>
                <input className='chat-input-box' type="text" value={text} onChange={onchange}/>
            </form>
            <button className="ellipsis margin-lft-half grow1" onClick={createMessage}><i class="fa-solid fa-arrow-right"></i></button>
        
        </div>
    </>

  )
}

export default ChatWindow;