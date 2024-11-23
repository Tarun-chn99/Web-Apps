// bubble sort

const arr = [1,4,2,-2,5,3];

const sortArray = (arr,n) => {
    
    if(n === 0  || n === 1)
        return;

    for(let i=0; i<n-1; ++i)
        if(arr[i]>arr[i+1])
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];

    sortArray(arr,n-1);
}

sortArray(arr,arr.length);
console.log("Sorted array: ",arr);