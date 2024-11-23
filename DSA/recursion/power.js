// calculate power of 2

let n=2;
let pow=3;

const power = (n,pow) => {

    if(typeof n !== 'number')
        return;

    if(!pow)
        return 1;

    return n*power(n,pow-1);
}

console.log(power(n,pow));