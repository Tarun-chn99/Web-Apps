import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'

const User = (props) => {
    
    const {name,setactiveReciever} = props;
    const setName = () => {
        setactiveReciever(name);
    }

    return (
        <Link className="user-chat-button" aria-current="page" to="/loggedIn/user" onClick={setName} >
            {name}
        </Link>
  )
}

export default User