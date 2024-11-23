// nth fibonacci number

let n = 9;

const nthFiboNo = (n) => {

    if(n===2) return 1;
    if(n===1)   return 0;

    return nthFiboNo(n-1) + nthFiboNo(n-2);
}  


console.log(nthFiboNo(7));

