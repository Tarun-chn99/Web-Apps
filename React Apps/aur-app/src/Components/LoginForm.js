import React, { useContext, useEffect, useState } from 'react';
import app from './authorize/firebase';
import {Link,useNavigate} from 'react-router-dom'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import 'firebase/auth';
import userContext from '../context/userContext';

const Login = (props) => {
  
    const context = useContext(userContext);
    const {userId,setUserId,getActiveChats,socket} = context;

    const navigate = useNavigate();
    const auth = getAuth(app);
    const [number, setNumber] = useState('+91 ');
    const [otp, setOtp] = useState("");
    const [flag, setflag] = useState(0);
    const [promise, setpromise] = useState("");
    const [loggedin, setloggedin] = useState(false);

    const setUpRecaptcha = async () => {

        window.RecaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {console.log("Captcha resolved!")},
        'expired-callback': () => {console.log("expired captcha");}
      }
     );  
    }


  //useEffect will call setUpRecaptcha() after loading of the component
  useEffect(() => {
      setUpRecaptcha(); 
      // eslint-disable-next-line
    }, []);
    
  useEffect(()=>{
    if(userId!=="")
    getActiveChats(userId);
    // eslint-disable-next-line
  },[userId]);
    

  //This function is responsible for verification of otp given by client for login
  const verifyOtp = (confirmationResult) => {
   
            const code = otp;
            confirmationResult.confirm(code).then((result) => {
            
              // User signed in successfully.
              const user = result.user;
              setUserId(user.uid);
              // console.log("User is signed in",user);
              localStorage.setItem('accessToken',user.accessToken);
              setloggedin(true);

           }).catch((error) => {console.log(error)});
  }

  //It handles otp submit request
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    verifyOtp(promise);
  };

  const onChange = (e) => {
    
    if(loggedin){
      props.setUserName(e.target.value);
    }

    if(flag === 0)  
    setNumber(e.target.value);
    else
    setOtp(e.target.value);
  }

  //This function sends the otp to client when number is submitted.
  const handleNumberSubmit = async (e) => {

    e.preventDefault();
    setflag(1); 

    const appVerifier = window.RecaptchaVerifier;
    const pr = await signInWithPhoneNumber(auth, number, appVerifier);
    setpromise(pr);
  }

  // Create user in database performing fetch() operation
  const loginUser = async () => {

    try{

        const response = await fetch(`http://localhost:5000/api/auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({uid: userId,name: props.userName,contact: number}) 
        });
        const json =  await response.json(); 
        setNumber("");
        setOtp("");
        // console.log(json);
        if(json.success){
          // socket.emit('setUserId', userId);
          navigate('/loggedIn/home');
        }
      
      }catch(error){
        console.log(error.message);
      }
  }

  return (

    <div className="homePage txt-center">
      <img src="https://i.gadgets360cdn.com/large/whatsapp_logo_facebook_1583246690176.jpg" alt="logo" height="200" width="380" /> 

      {!loggedin ? <h1 className="txt-white">Login</h1> : <h1 className="txt-white">Enter Name</h1> }

      <form className="loginForm margin-tb2 flex" onSubmit={flag===0 ? handleNumberSubmit : handleOtpSubmit }>
        
        {!loggedin ? 
          <>
          {flag === 0 ?
          <><input type="text" name="num" className="chat-input-box margin-tb1 txt-white" value={number} onChange={onChange} placeholder="Enter Number..." /></>
          : <input type="text" name="otp" className="chat-input-box margin-tb1 txt-white" value={otp} onChange={onChange} placeholder="Enter Otp..." />
          }
          <button className="ellipsis margin-lft-half grow1" type="submit" onClick={ flag===0 ? handleNumberSubmit : handleOtpSubmit }><i className="fa-solid fa-arrow-right txt-white"></i></button>
          </>
          :
          <>
          <input type="text" name="name" className="chat-input-box margin-tb1 txt-white" value={props.userName} onChange={onChange} placeholder="Enter Name..." required />
          <Link className="ellipsis margin-lft-half grow1" aria-current="page" to="/login" onClick={loginUser}>
            <i className="fa-solid fa-arrow-right txt-white"></i>
          </Link>
          </> 
        }
        
      </form>

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
