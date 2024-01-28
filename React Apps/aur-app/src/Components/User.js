import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'

const User = (props) => {
    
    const {name,setactiveReciever,recieverId} = props;
    const setName = () => {
        setactiveReciever({name:name,id:recieverId});
        
    }

    useEffect(()=>{
        console.log("USer is re rendered");
    },[]);

    return (
        <Link className="user-chat-button" aria-current="page" to="/loggedIn/user" onClick={setName} >
            {name}
        </Link>
  )
}

export default User