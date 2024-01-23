import userContext from './userContext';
// import {useState} from 'react'

const UserState = (props) => {
  
  const host = "http://localhost:5000";

  return(
        <userContext.Provider value={{}}>
            {props.children}
        </userContext.Provider>
    );
}


export default UserState;