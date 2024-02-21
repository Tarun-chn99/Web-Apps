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

        // socket listening to messageToReciever event representing sender's message

        socket.on('messageToReciever', (type,msg) => {

            const msg_time = getTime();

            if(type === 'text')
                reciever_chat.push({
                    msgType: type,
                    message: msg,
                    side: 'float-lft',
                    time: msg_time
                });
            else
                reciever_chat.push({
                    msgType: type,
                file: msg,
                side: 'float-lft',
                time: msg_time
                });
        saveMessage(userId,recieverId,type,msg,'float-lft',msg_time);
        setMessage([...reciever_chat]);                                             // Create a new array to trigger re-render
        playNotificationSound();
        });

        return () =>  socket.off('messageToReciever');
        //eslint-disable-next-line
    }, [reciever_chat]); 
    

    // Function to create message in chat window and saving the message to the database

    const createMessage = (e) => {
        e.preventDefault();
        if(text!==""){

            const time = getTime();            
            reciever_chat.push({
                msgType: 'text',
                message: text,
                side: 'float-rit',
                time: time
            });
            setMessage([...reciever_chat]);
            socket.emit('messageFromSender','text',text,recieverId,name);
            saveMessage(userId,recieverId,'text',text,'float-rit',time);
            setText("");
        }
    }

    // Function to get the current time

    const getTime = () => {
            
            const d = new Date();
            const hour = d.getHours().toString(), minute = d.getMinutes().toString();
            const zone = (d.getHours() >= 12 && d.getMinutes >=0 ? "pm" : "am");
            const time = hour + ":" + minute + " " + zone;

            return time;
    }

    // Funtion to play notification sound on recieving a message

    function playNotificationSound(){
        const audio = new Audio('../whatsapp.mp3');
        audio.play();
      };


    const handleUploadFile = () => {
        let input = document.createElement('input');
        input.type = 'file';
        input.name = 'file';
        let fileObject;
    
        input.onchange = function(e) {
            fileObject = e.target.files[0];
            const reader = new FileReader();
    
            reader.onload = function(event) {

                const buffer = event.target.result; // This is the buffer
                const imgUrl = URL.createObjectURL(fileObject);
                const imgContainer = document.createElement('div');
                const time = getTime();
    
                imgContainer.innerHTML = `
                    <img src=${imgUrl} class="img-msg" />
                    <span class='img-time' style="color:black;">${time}<i class="fa-solid fa-check tick"></i></span>
                `;
                imgContainer.classList.add("img-container");
                imgContainer.classList.add("float-rit");        
                imgContainer.style.overflow = 'hidden';            
                document.querySelector("#chat-screen").appendChild(imgContainer);
                console.log(fileObject);
                console.log(typeof fileObject);
                socket.emit('messageFromSender','img',buffer,recieverId,name);
                saveMessage(userId,recieverId,'img',buffer,'float-rit',time);
            };
    
            reader.readAsArrayBuffer(fileObject); // Read the file as an ArrayBuffer
        };
    
        input.click();
    };
    


    return (
    
    <>
        <div id="chat-screen">                                                  
            {                                                                 /*  Creating message elements in the chat window    */ 
            message.map((val,index) => {
                if(val.msgType === 'text'){

                    return  <div className={`msg ${val.side}`} key={index}>
                            <div>{val.message}</div>
                            <span className="time float-rit">
                            {val.time}
                            <i className="fa-solid fa-check" style={{color: "#000000",marginLeft:"8px"}}></i>
                            </span>
                        </div>
                }
                else{

                    return  <div className={`img-container ${val.side}`}  key={index} >
                            <img src={(function(){
                                const buffer = `${val.file}`;
                                const blob = new Blob([buffer],{type:'image/jpeg'});
                                const imageUrl = URL.createObjectURL(blob);
                                return imageUrl;
                            })()} className="img-msg" alt=''/>
                            <span className='img-time'>{val.time}<i className="fa-solid fa-check tick"></i></span>
                        </div>
                }   
              })
            }
        </div>

        <div className='chat-buttons flex bottom-right-corner'>
            
            <button className="ellipsis margin-rit-half grow1" id="file" onClick={handleUploadFile}><i className="fa-solid fa-plus txt-white"></i></button>
            <form action="" className='grow10' onSubmit={createMessage}>
                <input className='chat-input-box' type="text" value={text} onChange={onchange}/>
            </form>
            <button className="ellipsis margin-lft-half grow1" onClick={createMessage}><i className="fa-solid fa-arrow-right txt-white"></i></button>
        
        </div>
    </>

  )
}

export default ChatWindow;

