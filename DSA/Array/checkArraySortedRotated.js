const arr = [3,4,5,1,2];
const n = arr.length;

const isArraySorted = (arr,n) => {
    
    let i=0;
    let peak = 0;

    while(i<n-1) 
        if(arr[i]<arr[i+1])  
            i++; 
        else {
            i++;
            peak=i;
            console.log("peak: ",i);
        }
    
    if(i===n-1) return true;
    else return false;
}

console.log(isArraySorted(arr,n));