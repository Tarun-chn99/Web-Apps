import React, { useEffect } from 'react';
import Navbar from './Navbar';
import User from './User';

const ChatsPanel = (props) => {

    return(
        <div className='home-container'>
            
            <Navbar userName={props.userName} side="left"/>
            {/* <input type='text' name='users' className=''/> */}
            <div className='chats-panel flex flex-vertical'>
                <User name="Tanisha" setactiveReciever={props.setactiveReciever}/>
                <User name="Tarun" setactiveReciever={props.setactiveReciever}/>
                <User name="Ashish" setactiveReciever={props.setactiveReciever}/>
            </div>
        </div>
    )
}

export default ChatsPanel;