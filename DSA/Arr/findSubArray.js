// https://leetcode.com/problems/find-subarrays-with-equal-sum/description/

const findSubarrays = function(arr) {
    
    let map = new Map();
    let n = arr.length;
    for(let i=0;i<n-1; ++i){
        let sum=0;
        for(let j=i; j<i+2; ++j)
            sum+=arr[j];
        if(map.has(sum))
            return true;
        map.set(sum);
    }
    return false;
};