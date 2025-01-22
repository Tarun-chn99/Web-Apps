// https://leetcode.com/problems/peak-index-in-a-mountain-array/

const peakIndexInMountainArray = function(arr) {
    
    if(!Array.isArray(arr)) return 'Invalid array';
    if(arr.length < 3)  return 'array is too short';


    let s = 0;
    let e = arr.length - 1;

    while(s<e){

        let mid = Math.floor((s+e)/2);
        
        if(arr[mid] < arr[mid+1] )
            s = mid + 1;
        else
            e = mid;
    }

    return s;
};

let arr = [3,5,3,2,0];
console.log(peakIndexInMountainArray(arr));