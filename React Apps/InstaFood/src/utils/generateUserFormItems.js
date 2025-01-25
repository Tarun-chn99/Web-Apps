
const generateUserFormItems = (isLoginForm,isVerifyingOTP) => {
    
    const formTitle = isVerifyingOTP ? 'Enter OTP' : (isLoginForm ? 'Login' : 'Sign Up');
    const toggleLoginForm = getToggleLoginFormText(isVerifyingOTP,isLoginForm);
    const toggleTextColor = isVerifyingOTP && isLoginForm ? 'text-gray-800' : 'text-orange-500';
    const buttonLabel = isVerifyingOTP ? 'Verify OTP' : (isLoginForm ? 'Login' : 'Sign Up');
    const termsText = getTermsText(isVerifyingOTP,isLoginForm);
    const inputBoxClass = 'p-3 text-sm border border-gray-200 outline-none cursor-text text-gray-800 w-full';

    return {
        formTitle,
        toggleLoginForm,
        toggleTextColor,
        buttonLabel,
        termsText,
        inputBoxClass
    }
}

const getToggleLoginFormText = (isVerifyingOTP,isLoginForm) => {

    if(isVerifyingOTP && isLoginForm)
        return "We have sent an OTP to your phone number."
    
    return (isLoginForm 
        ? 'create an account' 
        : 'login to your account');
}

const getTermsText = (isVerifyingOTP,isLoginForm) => {

    if(isVerifyingOTP)
        return null
    
    return (isLoginForm 
        ? 'By clicking on Login, I accept the Terms & Conditions & Privacy Policy' 
        : 'By creating an account, I accept the Terms & Conditions & Privacy Policy');
}

export default generateUserFormItems;

