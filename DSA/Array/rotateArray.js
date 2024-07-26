const arr = [1,2,3,4,5,6,7];
const n = arr.length;

export const swapArray = (arr,i,j) => {
    
    while(i<j){
        [arr[j],arr[i]] = [arr[i],arr[j]];
        i++;
        j--;
    }

}

const shiftRight = (arr,n,k) => {
    
    if(n===0 || n===1) return;
    if(k===0) return;
    if(k>n) k = k%n;

    swapArray(arr,0,n-1);
    swapArray(arr,0,k-1);
    swapArray(arr,k,n-1);
}

const shiftLeft = (arr,n,k) => {
    
    if(n===0 || n===1) return;
    if(k===0) return;
    if(k>n) k = k%n;

    swapArray(arr,0,n-1);
    swapArray(arr,0,n-k-1);
    swapArray(arr,n-k,n-1);
}

const rotateArray2 = (arr,n,k) => {

    if(k>n) k = k%n;
    if(k===0) return;

    let i=0;
    let j=n;

    while(i<n-k){
        arr[j] = arr[i];
        j++;
        i++;
    }

    i=0;
    j=n-k;
    
    while(i<n){
        arr[i] = arr[j];
        i++;
        j++;
    }
    arr.length = n;
}
