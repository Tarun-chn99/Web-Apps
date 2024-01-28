import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import User from './User';
import userContext from '../context/userContext';

const ChatsPanel = (props) => {

    const context = useContext(userContext);
    const {activeChats} = context;

    useEffect(() => {
        console.log(activeChats);
    }, [])
    
    
    return(
        <div className='home-container'>
            
            <Navbar userName={props.userName} side="left"/>
            {/* <input type='text' name='users' className=''/> */}
            <div className='chats-panel flex flex-vertical'>
                {activeChats.map((users) => {
                    return <User name={users.name} recieverId={users.recieverId} setactiveReciever={props.setactiveReciever} key={users._id}/>
                })}
            </div>
        </div>
    )
}

export default ChatsPanel;