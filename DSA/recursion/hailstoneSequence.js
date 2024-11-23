// generate hailstone sequence

const num = 18;

const sequence = num => {

    if(typeof num !== 'number')
        return 'Invalid input';

    if(num === 1)
        return num;

    return num + ' ' + sequence((num%2===0 ? Math.floor(num/2) : 3*num+1));
}

console.log("Hailstone sequence: ",sequence(num));

