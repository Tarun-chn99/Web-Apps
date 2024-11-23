// merge sort

const arr = [1,4,2,77,13,65,85,-2,5,3];

const sortArray = (arr,s,e) => {
    
    if(!e)  return;

    for(let i=s; i<e; ++i)
        if(arr[i]>arr[i+1])
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];

    sortArray(arr,s,e-1);
}

const mergeSort = (arr,s,e) => {

    if(s>=e) 
        return;

    let mid = Math.floor(((s+e)/2));

    mergeSort(arr,s,mid);
    mergeSort(arr,mid+1,e);
    sortArray(arr,s,e);
}


mergeSort(arr,0,arr.length-1);
console.log("Merge sorted array: ",arr);