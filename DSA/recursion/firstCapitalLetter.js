// find first capital letter in string

const s = 'this is Tarun';

const firstCapitalLetter = (s) => {

    if(typeof s !== 'string')
        return 'Invaild input';

    if(s === '')   
        return 'No capital letter found';

    const charCode = s.charCodeAt(0);

    if(charCode >= 65 && charCode <= 90)
        return s[0];
    else
        return firstCapitalLetter(s.slice(1));
}

console.log('First capital letter: ',firstCapitalLetter(s));