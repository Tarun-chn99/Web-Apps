import { useEffect, useRef, useState } from "react"
import { BACK_ICON } from "../utils/constants";
import generateUserFormItems from "../utils/generateUserFormItems";

const UserForm = ({handleCloseLoginForm}) => {

    const [isVerifyingOTP,setIsVerifyingOTP] = useState(false);
    const [isLoginForm,setIsLoginForm] = useState(true);
    const [showReferralBox,setShowReferralBox] = useState(false);
    const inputRef = useRef(null);

    const {
        formTitle,
        toggleLoginForm,
        toggleTextColor,
        buttonLabel,
        termsText,
        inputBoxClass
    } = generateUserFormItems(isVerifyingOTP,isLoginForm);

    const handleToggleLoginForm = () => {
        if(!(isVerifyingOTP && isLoginForm)){
            setIsLoginForm(!isLoginForm);
            if(!isLoginForm && showReferralBox) setShowReferralBox(false); 
        }
    }

    const handleCloseOrBackAction  = () => isVerifyingOTP ? setIsVerifyingOTP(false) : handleCloseLoginForm();
    const handlePhoneNoValidation = (e) => e.target.value = e.target.value.replace(/\D/g, '');
    const handleOTPVerification  = () => {
        setIsVerifyingOTP(true);
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[isLoginForm]);


    return (
    <div className="w-96 my-8">
        
        <button className="py-2 px-4 my-2 bg-slate-200 rounded-lg outline-none hover:bg-slate-500" onClick={handleCloseOrBackAction }>
            { isVerifyingOTP ? <img className='w-6 py-2' src={BACK_ICON} alt='back'/> : 'X' }
        </button>

        <h1 className="my-2 text-2xl font-bold">{formTitle}</h1>
        <p className="text-xs" onClick={handleToggleLoginForm}>or <span className={`cursor-pointer ${toggleTextColor}`}>{toggleLoginForm}</span></p>

        <form className='w-full my-8' onSubmit={(e)=>e.preventDefault()}>
            
            <input ref={inputRef} onChange={handlePhoneNoValidation} className={`${inputBoxClass}`} name='phoneNo' type='text' placeholder="Phone number" maxLength='10'/>
            {
                !isLoginForm && !isVerifyingOTP &&
                    <>
                        <input className={`${inputBoxClass} border-t-0`}  type='text' name='name' placeholder="Name"/>
                        <input className={`${inputBoxClass} border-t-0`}  type='text' name='email' placeholder="Email"/>
                        { 
                            showReferralBox ? <input className={`${inputBoxClass} border-t-0`} type='text' placeholder="Referral Code"/> 
                            : <p className='text-blue-800 my-4 text-sm cursor-pointer' onClick={()=>setShowReferralBox(true)}>Have a referral code?</p>
                        }
                     </>
            }
            { isVerifyingOTP && <input className={`${inputBoxClass} border-t-0`}  type='text' name='name' placeholder="One time password" pattern='\d*' maxLength='6'/> }
            <button className="w-full p-4 mt-4 text-white bg-orange-500 font-bold rounded-none outline-none" onClick={handleOTPVerification}>{buttonLabel}</button>
            <p className="text-xs text-gray-800 my-1">{termsText}</p>
        </form>
    </div>
  )
}


export default UserForm
