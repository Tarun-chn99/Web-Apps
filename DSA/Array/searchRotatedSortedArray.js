// Find an element in rotated sorted array

import { findPivot } from "./findPivot.js";

const arr = [7,9,2,4,5,6];

function searchElement(arr,key){
    
    let s=0;
    let e=arr.length-1;
    let mid;
    const pivot = findPivot(arr);

    if(arr[pivot] === key)  return pivot;
    if(pivot === e) e=arr.length-2;
    if(arr[pivot]<key)  s=pivot+1;  
    else    e=pivot-1;
    
    mid = Math.floor(s + (e-s)/2);

    while(s<=e){
        
        if(arr[mid] === key)    return mid;
        else if(arr[mid] > key) e = mid-1;
        else    s = mid+1;

        mid = Math.floor(s + (e-s)/2);
    }
    return -1;
}


console.time();
console.log(searchElement(arr,6));
console.timeEnd();








// function searchElement2(arr,key){
    
//     let s=0;
//     let e=arr.length-1;
//     let mid = Math.floor(s + (e-s)/2);

//     while(s<=e){
        
//         if(arr[mid] === key)    return mid;
//         else if(arr[mid] > key) e = mid-1;
//         else    s = mid+1;

//         mid = Math.floor(s + (e-s)/2);
//     }

//     return -1;
// }