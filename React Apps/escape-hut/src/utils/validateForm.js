// const namePattern = /^[a-zA-Z]+\s+[a-zA-Z]/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPatten =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

export const validateForm = (email,password) => {

    const isEmailVaild = emailPattern.test(email);
    const isPasswordValid = passwordPatten.test(password);

    if(!isEmailVaild) return 'Invalid email';
    if(!isPasswordValid) return 'Invalid password';
    
    return null;

}