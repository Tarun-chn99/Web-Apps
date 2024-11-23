// calculate the highest common factor

let divisor = 2;
let dividend = 7;

const hcf = (div,divd) => {

    if(typeof div !== 'number' || typeof divd !== 'number')
        return 'Invalid input';

    if(!div)
        return divd;

    return hcf((divd % div),div);
}

console.log("HCF: ",hcf2(divisor,dividend));