// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

let nums = [3,4,9,1,3,9,5], key = 9, k = 1;

var findKDistantIndices = function(nums, key, k) {
    
    let keyIndices = [];

    for(let i=0; i<nums.length; ++i)
        if(nums[i] === key)
            keyIndices.push(i);

    let i=0;
    let arr = [];

    for(let j=0; j<keyIndices.length; ++j){

        while(i<nums.length){

            let mod = Math.abs(i-keyIndices[j])
            if(mod <= k)
                arr.push(i);
                
            if(mod>k && i>keyIndices[j])
                break;

            ++i;
        }    
    }

    return arr;
};

console.log("arr: ",findKDistantIndices(nums,key,k));