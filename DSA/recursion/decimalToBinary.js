//  calculate binary of decimal no

let num = 66;

const toBinary = (num) => {

    if(typeof num !== 'number')
        return "Invalid input";

    if(!num)
        return '';

    return toBinary(Math.floor(num/2)) + num%2 ; 
}

console.log("Binary: ",toBinary(num));
