//  calculate odd and even in series

let start = 9;
let end = 22;
let str='';

const generateOddEven = (s,e) => {

    if(s>e) 
        return '';

    return s+' '+ generateOddEven(s+2,e);
}

console.log("Odd: ",generateOddEven((start % 2 === 0 ? start+1 : start),end));
console.log("Even: ",generateOddEven((start % 2 === 0 ? start : start+1),end));
