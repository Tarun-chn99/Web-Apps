import { useState } from "react"
import { validatePhoneNo } from "../utils/validateForm";

const UserForm = () => {

    const [isLoginForm,setIsLoginForm] = useState(true);
    const [showReferralBox,setShowReferralBox] = useState(false);
    const [phoneNo,setPhoneNo] = useState('');

    const formTitle = isLoginForm ? 'Login' : 'Sign Up';
    const toggleText = isLoginForm ? 'create an account' : 'login to your account';
    const buttonLabel = isLoginForm ? 'Login' : 'Sign Up';
    const termsText = isLoginForm ? 'By clicking on Login, I accept the Terms & Conditions & Privacy Policy' : 'By creating an account, I accept the Terms & Conditions & Privacy Policy';
    const inputBoxClasses = 'p-4 border border-gray-200 outline-none cursor-text text-gray-800 w-full';

    const handleToggleText = () => {
        setIsLoginForm(!isLoginForm);
        if(!isLoginForm && showReferralBox) setShowReferralBox(false); 
    }

    const handleChange = (e) => {
        const data = e.target.value;
        validatePhoneNo(data) && setPhoneNo(data);
    }

    return (
    <div className="w-96 my-8">
        
        <h1 className="my-2 text-2xl font-bold">{formTitle}</h1>
        <p className="text-xs" onClick={handleToggleText}>or <span className="text-orange-500 cursor-pointer">{toggleText}</span></p>

        <form className='w-full my-8'>
            
            <input className={`${inputBoxClasses}`} name='phoneNo' value={phoneNo} onChange={handleChange} type='text' placeholder="Phone number"/>
            {
                !isLoginForm && 
                    <>
                        <input className={`${inputBoxClasses} border-t-0`}  type='text' name='name' placeholder="Name"/>
                        <input className={`${inputBoxClasses} border-t-0`}  type='text' name='email' placeholder="Email"/>
                        {showReferralBox && <input className={`${inputBoxClasses} border-t-0`} type='text' placeholder="Referral Code"/>}
                     </>
            }
            {
                !isLoginForm && !showReferralBox &&
                    <p className='text-blue-800 my-4 text-sm cursor-pointer' onClick={()=>setShowReferralBox(true)}>Have a referral code?</p>
            }
            <button className="w-full p-4 mt-4 text-white bg-orange-500 font-bold rounded-none">{buttonLabel}</button>
            <p className="text-xs text-gray-800 my-1">{termsText}</p>
        </form>
    </div>
  )
}

export default UserForm
