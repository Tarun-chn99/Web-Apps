import { insertionSort } from "./insertionSort.js";

// using Insertion sort
const kthSmallest = (arr,l,r,k) => {
    let n = r-l+1;
    if(k>n)  return "undefined";
    if(n===1 && k===1)  return arr[0];
    
    // arr.sort((a,b)=>a-b);
    insertionSort(arr,n);
    return arr[k-1];
  }


  
const arr = [8,4,2,6,0,1];
console.log(kthSmallest(arr,0,5,3));