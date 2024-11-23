//  count number of digits in number

let n = 465;

const count = (n) => {
    
    if(typeof n !== 'number')   
        return "Invalid input";
 
    if(!n)  
        return 0;

    return 1+count(Math.floor(n/10));
}

console.log("Count: ",count(n));

