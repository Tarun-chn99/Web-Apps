// copy one string to other

const str = 'Tarun Chauhan';

const copy = (str) => {

    if(typeof str !== 'string')
        return 'Invaild input';

    if(str === '') 
        return str;

    return str[0]+copy(str.slice(1))
}

let s = copy(str);
console.log(s)