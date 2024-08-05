import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {

  const [isSignInFOrm,setIsSignInForm] = useState(true);
  const handleToggleForm = () => setIsSignInForm(!isSignInFOrm);
  
  return (
        <form className="w-96 absolute p-12 bg-black my-36 mx-auto left-0 right-0 z-10 rounded-2xl bg-opacity-65 text-white">
            
            <h1 className="font-bold text-3xl pb-4">{isSignInFOrm ? 'Sign In' : 'Sign Up'}</h1>
            
            {!isSignInFOrm && <input className='form-input' type="text" placeholder="Enter Name..."/>}

            <input className='form-input' type="text" placeholder="Enter email address..."/>
            <input className='form-input' type="password" placeholder="Enter password" />
            <button className="w-full p-4 my-2 text-white bg-red-700 rounded-lg">{isSignInFOrm ? 'Sign In' : 'Sign Up'}</button>

            {isSignInFOrm ? 
              <p className="my-2">New to Netflix? <Link className="hover:underline" onClick={handleToggleForm}>Sign up now</Link></p>
            : <p className="my-2">Already registered? <Link className="hover:underline" onClick={handleToggleForm}>Sign in now</Link></p>
            }
            
        </form>
  );
}

export default Form;