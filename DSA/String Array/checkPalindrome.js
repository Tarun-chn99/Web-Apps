let s = 'palap';
let lenth = s.length;

const checkPalindrome = (s) => {

    if(typeof s !== 'string') return 'Error : enter string data';

    const len = s.length;
    if(len === 0) return false;
    if(len === 1) return true;
    
    const arr = s.split('');
    let i=0,j=len-1;

    while(i<j){
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i++;
        j--;
    }

    return s === arr.join('')
}

const checkPalindrome2 = (arr,n) => {

    let temp='',i=n-1;
    while(i>=0){
        temp += arr[i];
        i--;
    }

    console.log(temp);
    return temp === arr;
}

console.log(checkPalindrome(s));