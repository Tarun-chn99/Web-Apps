// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

const findMin = arr => {

    if(!(Array.isArray(arr)))   return 'Invalid array';
    
    let n = arr.length;

    if(!n)    return 'array is empty';
    if(n < 2)    return arr[0];
    if(arr[0] < arr[n-1])    return arr[0];

    let s = 0, e = n-1;

    while(s<=e){

        let mid = Math.floor((s+e)/2);

        if(arr[s] <= arr[mid]){

            if(arr[mid] < arr[mid+1])
                s = mid+1;
            else
                return arr[mid+1];
        }
        else{

            if(arr[mid-1] > arr[mid])
                return arr[mid];
            else
                e = mid-1;
        }
    }
}

const findMin2 = arr => {

    if(!(Array.isArray(arr)))   return 'Invalid array';
    
    let n = arr.length;
    let s = 0, e = n-1;

    while(s<e){
    
        let mid = Math.floor((s+e)/2);

        if(arr[e] > arr[mid])
            e = mid;
        else
            s = mid+1;    
    }

    return arr[s];
}

console.log("Min: ",findMin2([4,5,6,7,1,2]));