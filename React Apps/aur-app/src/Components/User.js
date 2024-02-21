import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import userContext from '../context/userContext'

const User = (props) => {
    
    const {name,setReciever,recieverId} = props;
    const context = useContext(userContext);
    const {getChatMessages} = context;

    const setName = async () => {

        const msg = await getChatMessages(recieverId);
        setReciever(name,recieverId,msg);
    }
    

    return (
        <Link className="user-chat-button" aria-current="page" to="/loggedIn/user" onClick={setName} >
            {name}
        </Link>
  )
}

export default User