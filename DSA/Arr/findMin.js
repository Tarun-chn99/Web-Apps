// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

const findMin = function(arr) {
    
    if(!(Array.isArray(arr)))   return 'Invalid array';
    
    let n = arr.length;

    if(!n)    return 'array is empty';
    if(n < 2)    return arr[0];
    if(arr[0] < arr[n-1])    return arr[0];

    let s = 0;
    let e = arr.length -1;

    while(s < e ) {
        
        let mid = Math.floor((s + e)/2)

        if(arr[mid] > arr[e])
            s = mid + 1;
        else if(arr[mid] < arr[e])
            e = mid;
        else 
            e--
    }
    
    return arr[s];
};

const arr = [1,1];
console.log(findMin(arr))