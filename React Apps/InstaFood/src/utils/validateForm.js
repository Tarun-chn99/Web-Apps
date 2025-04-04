const namePattern = /^[a-zA-Z]+\s+[a-zA-Z]/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegex = /^\d{0,10}$/;

export const validatePhoneNo = (phoneNo) => phoneNumberRegex.test(phoneNo);
export const validateName = (name) => namePattern.test(name) ;
export const validateEmail = (email) => emailPattern.test(email);
