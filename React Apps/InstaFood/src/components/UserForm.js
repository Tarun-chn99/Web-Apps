import { useEffect, useRef, useState } from "react"
import { BACK_ICON } from "../utils/constants";
import generateUserFormItems from "../utils/generateUserFormItems";
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from "react-redux";
import { addUser, setAuthToken } from "../AppStore/userSlice";
import { setAuth } from "../AppStore/appSlice";


const UserForm = ({handleCloseLoginForm}) => {

    const dispatch = useDispatch();
    const [isVerifyingOTP,setIsVerifyingOTP] = useState(false);
    const [isLoginForm,setIsLoginForm] = useState(true);
    const [showReferralBox,setShowReferralBox] = useState(false);
    const inputPhoneNoRef = useRef(null);
    const inputOtpRef = useRef(null);

    const {
        formTitle,
        toggleLoginForm,
        toggleTextColor,
        buttonLabel,
        termsText,
        inputBoxClass
    } = generateUserFormItems(isLoginForm,isVerifyingOTP);
    
    const handleCloseOrBackAction  = () => {
        if(isVerifyingOTP){
            setIsVerifyingOTP(false) 
            inputPhoneNoRef.current.value = '';
            inputPhoneNoRef.current.focus();
        }
        else 
        handleCloseLoginForm();
        
    };
    
    const handlePhoneNoValidation = (e) => e.target.value = e.target.value.replace(/\D/g, '');

    
    const verifyRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
        }
        });
    }
    
    const handleToggleLoginForm = () => {
        if(!(isVerifyingOTP)){
            setIsLoginForm(!isLoginForm);
            // if(!isLoginForm && showReferralBox) setShowReferralBox(false); 
        }
    }
    
    const handleFormSubmit  = () => {

        if(buttonLabel === 'Login' || buttonLabel === 'Sign Up'){

            const appVerifier = window.recaptchaVerifier;
            
            signInWithPhoneNumber(auth, '+91 '+inputPhoneNoRef.current.value, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                inputOtpRef.current.focus();            
            })
            .catch((error) => console.log('Error: ',error.message));

            setIsVerifyingOTP(true);
        }
        else{

            const otpCode = inputOtpRef.current.value;
            
            confirmationResult.confirm(otpCode)
            .then((result) => {

                const {uid,displayName,email,phoneNumber,accessToken} = result.user;
                
                dispatch(setAuth(accessToken));
                dispatch(setAuthToken(accessToken));
                dispatch(addUser({
                    uid: uid,
                    name: displayName,
                    email: email,
                    phoneNumber: phoneNumber
                }));
                
                handleCloseLoginForm();
            })
            .catch((error) =>  console.log(error.message));
        }
    }

    useEffect(()=>{
        inputPhoneNoRef.current.focus();
        verifyRecaptcha();
    },[isLoginForm]);

    useEffect(()=>{
        isVerifyingOTP && inputOtpRef.current.focus();
    },[isVerifyingOTP]);


    return (
    <div className="w-80 my-8 mr-auto h-full">
        
        <button className="py-2 px-4 my-2 text-base bg-slate-200 rounded-lg outline-none hover:bg-slate-500" 
                onClick={handleCloseOrBackAction }>
            { isVerifyingOTP ? <img className='w-8 py-2' src={BACK_ICON} alt='back'/> : 'X' }
        </button>

        <h1 className="my-2 text-lg font-bold">{formTitle}</h1>
        <p  className="text-xs" onClick={handleToggleLoginForm}>
                {!isVerifyingOTP ? "or " : ''}<span className={`cursor-pointer ${toggleTextColor}`}>{toggleLoginForm}</span>
        </p>

        <form className='w-full my-8' onSubmit={(e)=>e.preventDefault()}>
            
            <input ref={inputPhoneNoRef} 
                   onChange={handlePhoneNoValidation} 
                   className={`${inputBoxClass}`} 
                   name='phoneNo' 
                   type='text' 
                   placeholder="Phone number" 
                   maxLength='10'
                />

            {
                !isLoginForm && !isVerifyingOTP &&
                    <>
                        <input className={`${inputBoxClass} border-t-0`}  type='text' name='name' placeholder="Name"/>
                        <input className={`${inputBoxClass} border-t-0`}  type='text' name='email' placeholder="Email"/>
                        { 
                            showReferralBox ? 
                            
                            <input className={`${inputBoxClass} border-t-0`} type='text' placeholder="Referral Code"/> 
                            : 
                            <p className='text-blue-800 my-4 text-sm cursor-pointer' 
                               onClick={()=>setShowReferralBox(true)}>Have a referral code?</p>
                        }
                    </>
            }

            { 
                isVerifyingOTP && 
                
                <input ref={inputOtpRef} 
                       className={`${inputBoxClass} border-t-0`}  
                       type='text' 
                       name='name' 
                       placeholder="One time password" 
                       pattern='\d*' 
                       maxLength='6'
                    /> 
            }

            <button id='sign-in-button' className="w-full p-3 text-sm mt-4 text-white bg-orange-500 font-bold rounded-none outline-none" onClick={handleFormSubmit}>{buttonLabel}</button>
            <p className="text-[0.65rem] text-gray-800 my-2"><b>{termsText}</b></p>
            
        </form>
    </div>
  )
}


export default UserForm
