// merge sort

const arr = [9,5,1,2,0,-5,-1,3,3];

const mergeSort = (arr,s,e) => {
    
    if(!Array.isArray(arr)) return 'Invalid input';

    if(s>=e)   return [arr[s]];

    let mid = Math.floor((s+e)/2);
    let arr1 = mergeSort(arr,s,mid);
    let arr2 = mergeSort(arr,mid+1,e);
    
    return mergeArray(arr1,arr1.length,arr2,arr2.length);

}

const mergeArray = (arr1,m,arr2,n) => {

    let arr = [];
    let i=0,j=0;
    
    while(i<m && j<n){

        if(arr1[i]<=arr2[j]){
            arr.push(arr1[i]);
            i++;
        }
        else{
            arr.push(arr2[j]);
            j++;
        }

    }

    while(i<m){
        arr.push(arr1[i]);
        i++;
    }

    while(j<n){
        arr.push(arr2[j]);
        j++;
    }

    return arr;
}

console.log("Merge sorted array: ",mergeSort(arr,0,arr.length-1));