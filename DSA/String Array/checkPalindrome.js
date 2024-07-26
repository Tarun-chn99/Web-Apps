let s = 'palap';
let lenth = s.length;

const checkPalindrome = (arr,n) => {

    let temp='',i=n-1;
    while(i>=0){
        temp += arr[i];
        i--;
    }

    console.log(temp);
    return temp === arr;
}
console.log(checkPalindrome(s,lenth));