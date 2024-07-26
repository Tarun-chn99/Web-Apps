import {swapArray} from '../Array/rotateArray.js'

const text = "The Sky is blue";
const length = text.length;

// console.log(text.split(""));

const reverseWords = (arr,n) => {

    let i=0,j=0;

    while(j<n){

        if(!(arr[j] !== ' ' && j+1<n)){
            if(j+1<n) swapArray(arr,i,j-1);
            else swapArray(arr,i,j)
            i = j+1;
        }
        j++;
    }
    console.log(arr);
}

const reverseOrder = (arr,n) => {

    swapArray(arr,0,n-1);
    reverseWords(arr,n);
    return arr;    
}

let reverseText = reverseOrder(text.split(""),length);

reverseText = reverseText.join("");

console.log(text);
console.log(reverseText);