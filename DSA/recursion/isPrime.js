//  calculate whether number is prime or not

let num = 11;
let mid = Math.floor(num/2);

const isPrime = (num,mid) => {

    if(typeof num !== 'number' || typeof mid !== 'number' )
        return "Invalid input";

    if(mid === 1)
        return true;

    if(num % mid)
        return isPrime(num,mid-1);
    else
        return false;
}

console.log("Is Prime: ",isPrime(num,mid));

