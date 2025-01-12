// https://leetcode.com/problems/minimum-positive-sum-subarray/

const minimumSumSubarray = function(nums, l, r) {
    
    let n = nums.length;
    let curr_sum = 0;
    let minSum = Number.MAX_SAFE_INTEGER;

    for(let i=l; i<=r; ++i){

        curr_sum = 0;

        for(let j=0; j<i; ++j)
            curr_sum += nums[j];

        if(curr_sum > 0)
            minSum = Math.min(curr_sum,minSum);

        let low = 0, high = i;
        
        while(high < n){
            curr_sum -= nums[low++];
            curr_sum += nums[high++];

            if(curr_sum > 0)
                minSum = Math.min(curr_sum,minSum);
        }
    }

    return (minSum === Infinity) ? -1 : minSum;
};
const  nums = [3, -2, 1, 4], l = 2, r = 3;

console.log("output:",minimumSumSubarray(nums,l,r));