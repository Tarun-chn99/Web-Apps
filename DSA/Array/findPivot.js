// Find pivot element using binary search

// const arr = [7,1,2]

export const findPivot = (arr) => {

    let s=0;
    let e=arr.length-1;
    let mid = Math.floor(s + (e-s)/2);
    
    while(s<e){
        
        if(arr[0]>arr[mid]){
            e=mid;
        }
        else{
            s=mid+1;
        } 

        mid = Math.floor(s + (e-s)/2);
    }

    return mid;
}

// console.log(findPivot(arr));