// https://leetcode.com/problems/minimum-positive-sum-subarray/

const minimumSumSubarray = function(nums, l, r) {
    
    let n = nums.length;
    let i = 0,j = 0;
    let sum = 0;
    let minSum = Infinity;
    
    while(j<n){
        
        while(sum <= 0 && j<n){
            sum += nums[j++];
        }
        
        console.log(sum,j);

        while(sum > 0 && i<n){

            let len = j-i;
            console.log("Sum: ",sum,"Condition: ",l,' <= ',len,' <= ',r)
            if(l <= len && len <= r){
                minSum = Math.min(minSum,sum);
                console.log('minSum: ',minSum);
            }
                
            sum -= nums[i++];
            console.log("Sum after minus: ",sum,'i:',i)
        }
    }

    return (minSum === Infinity) ? '-1' : minSum;
};
const  nums = [3, -2, 1, 4], l = 2, r = 3;

console.log("output:",minimumSumSubarray(nums,l,r));