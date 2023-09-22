import React from 'react'
import {Link} from 'react-router-dom'

const User = (props) => {
    const setName = () => {
        // props.setUserName(props.name);
    }

    return (
        <Link className="user-chat-button" aria-current="page" to="/loggedIn/user" onClick={setName} >
            {props.name}
        </Link>
  )
}

export default User