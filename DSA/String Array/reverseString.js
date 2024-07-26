const str = 'hello';
const len = str.length;

const reverse = (arr,n) => {

    if(n ==='' || n === 1) return;
    let reverseString = '';
    
    for(let i=len-1; i>=0; --i)
        reverseString+=arr[i];

    return reverseString;

}

console.log(reverse(str,len));