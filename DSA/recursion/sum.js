// sum of n numbers

let n = 3;

const sum = (n) => {

    if(typeof n !== 'number') 
        return new Error('Invalid input');
    
    if(n===1) 
        return 1;

    return n+sum(n-1);
}

console.log(sum(n));