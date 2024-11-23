
const digitName = ['zero','one','two','three','four','five','six','seven','eight','nine'];

const sayDigit = (num) => {

    if(!num) 
        return '';

    return sayDigit(Math.floor(num/10)) + " " +digitName[num%10];
}

console.log("428: ",sayDigit(4280000));