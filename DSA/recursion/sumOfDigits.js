// calculate sum of digits of number

let n = 46;

const sum = n => {

    if(typeof n !== 'number')
        return 'Invalid input';

    if(!n)
        return n;

    return (n%10) + sum(Math.floor(n/10));
}

console.log("Sum of digits: ",sum(n));