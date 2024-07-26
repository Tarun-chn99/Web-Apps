import {swapArray} from './rotateArray.js'

const arr1 = [1,2];
const arr2 = [3];

let m = arr1.length;
let n = arr2.length;


const addTwoArray = (arr1,arr2,m,n) => {
    
    let i=m-1,j=n-1,k=0,c=0;
    let arr = [];

    while(i>=0 && j>=0){
        
        let sum =arr1[i]+arr2[j]+c;
        if(sum>9){
            arr[k] = 0;
            c = 1;
        }
        else{
            arr[k] = sum;
            c = 0;
        }
        i--;j--;k++;
    }

    while(i>=0){
        
        let sum =arr1[i]+c;
        if(sum>9){
            arr[k] = 0;
            c = 1;
        }
        else{
            arr[k] = sum;
            c = 0;
        }
        i--;k++;
    }

    while(j>=0){
        
        let sum =arr2[j]+c;
        if(sum>9){
            arr[k] = 0;
            c = 1;
        }
        else{
            arr[k] = sum;
            c = 0;
        }
        j--;k++;
    }

    swapArray(arr,0,k-1);
    return arr;
}
console.time();
console.log(addTwoArray(arr1,arr2,m,n));
console.timeEnd();
