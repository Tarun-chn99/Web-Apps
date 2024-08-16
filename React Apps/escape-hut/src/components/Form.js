import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { validateForm } from "../utils/validateForm";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser } from "../appStore/userSlice";


const Form = () => {

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignInFOrm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleToggleForm = () => {
    setIsSignInForm(!isSignInFOrm);
    email.current.value='';
    password.current.value='';
    if(errorMessage !== null)   setErrorMessage(null);
  }

  const handleProfileUpdate = (userCredentials) => {
    updateProfile(userCredentials.user, {
      displayName: name?.current?.value
    })
    .then(()=>{
      const { uid, email,displayName} = auth.currentUser;
      dispatch(addUser({ uid,email,displayName}));
    })
    .catch((error) => {console.log(error)});
  }

  const handleButtonClick = () => {

    const message = validateForm(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message)  return;

    if(!isSignInFOrm){

      //Sign Up Authentication
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredentials)=> {handleProfileUpdate(userCredentials)})
      .catch((error) => {setErrorMessage(error.code + ' ' + error.message);});

    }else{

      //Sign In 
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredentials)=> {handleProfileUpdate(userCredentials)})
      .catch((error) => {setErrorMessage(error.code + ' ' + error.message);});
    }
  }

  return (
        <form onSubmit={(e)=>e.preventDefault()} className="w-96 absolute p-12 bg-black my-48  mx-auto left-0 right-0 z-[2] rounded-2xl bg-opacity-65 text-white">
            
            <h1 className="font-bold text-3xl pb-4">{isSignInFOrm ? 'Sign In' : 'Sign Up'}</h1>
            
            {!isSignInFOrm && <input ref={name} className='form-input' type="text" placeholder="Enter Name..."/>}

            <input ref={email} className='form-input' type="text" placeholder="Enter email address..."/>
            <input ref={password} className='form-input' type="password" placeholder="Enter password" />
            <p className="text-lg font-bold text-red-800">{errorMessage}</p>
            <button className="w-full p-4 mt-8 text-white bg-red-700 rounded-lg" onClick={handleButtonClick}>{isSignInFOrm ? 'Sign In' : 'Sign Up'}</button>

            {isSignInFOrm ? 
              <p className="mt-4">New to Netflix? <Link className="hover:underline cursor-pointer" onClick={handleToggleForm}>Sign up now</Link></p>
            : <p className="mt-4">Already registered? <Link className="hover:underline cursor-pointer" onClick={handleToggleForm}>Sign in now</Link></p>
            }
            
        </form>
  );
}

export default Form;