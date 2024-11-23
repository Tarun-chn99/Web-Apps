
const fact = n => {

    if(typeof n !== 'number') 
        return;
    
    if(n===1)  
        return n;

    return n*fact(n-1);
}

console.log(fact(5));