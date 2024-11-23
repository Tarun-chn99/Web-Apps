//  reverse of string

let str = 'w3school';

const reverse = str => {

    if(typeof str !== 'string')
        return 'Invalid input';

    if(str.length === 1)
        return str[0];

    return reverse(str.slice(1)) + str[0];
}

console.log("Reverse: ",reverse(str));