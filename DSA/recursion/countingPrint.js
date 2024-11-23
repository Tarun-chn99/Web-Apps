// print counting 1 -> n

let n = 8;

const printUptoN = n => {

    if(typeof n !== 'number')
        return new Error('Not a number');

    if(n === 0)
        return;

    console.log(n);

    printUptoN(n-1);
}

const printUptoN2 = n => {

    if(typeof n !== 'number')
        return new Error('Not a number');

    if(n === 0)
        return '';

    return printUptoN2(n-1) + n + " ";
}

printUptoN(n);
console.log("Print: ",printUptoN2(n))