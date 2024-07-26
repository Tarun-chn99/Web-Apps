const arr = [3,4,5,1,2];
const n = arr.length;

const isArraySorted = (arr,n) => {
    
    let i=0;
    let count=0;

    while(i<n){
        if(arr[i]>arr[i+1])
            count++;
        i++;
    } 

    if(arr[n-1]>arr[0])
    count++;


    return count===1;

}

console.log(isArraySorted(arr,n));