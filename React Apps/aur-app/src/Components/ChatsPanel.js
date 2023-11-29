import React from 'react';
import Navbar from './Navbar';
import User from './User';

const ChatsPanel = (props) => {
    return(
        <div className='home-container'>
            
            <Navbar userName={props.userName} side="left"/>
            <div className='chats-panel flex flex-vertical'>
                <User name="Tarun" />
            </div>
        </div>
    )
}

export default ChatsPanel;