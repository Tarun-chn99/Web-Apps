import { swap } from "./selectionSort.js";

const arr = [4,6,3,5,2,1,23,43,22,11];
const n = arr.length;

const bubbleSort = (arr,n) => {

    for(let i=0; i<n; ++i)
        for(let j=0; j<n-i-1; ++j)
            if(arr[j]>arr[j+1])
                swap(arr,j,j+1);
    
    console.log("Sorted Array: ",arr);
}

console.log("Original array: ",arr);
bubbleSort(arr,n);                          // In-place algorithm as it modifies the original array , usefull where memory is limited.