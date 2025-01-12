// https://leetcode.com/problems/subarray-sum-equals-k/

const subArraySum = (arr,k) => {

    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);

    for (let i=0;i<arr.length;i++) {

        sum += arr[i];

        if(map.has(sum-k)) 
            count += map.get(sum-k);

        if(map.has(sum)) 
            map.set(sum, map.get(sum)+1);
        else 
            map.set(sum, 1);

    }
    return count;    
}

const subarraySum2 = function(nums, k) {
    
    let n = nums.length;
    let i = 0;
    let curr_sum = 0;
    let count = 0;

    for(let i=0; i<n; ++i){

        curr_sum = 0;

        for(let j=0; j<i+1; ++j)
            curr_sum += nums[j];

        if(curr_sum === k)  count++;

        let low = 0, high = i+1;
        
        while(high < n){
            curr_sum -= nums[low++];
            curr_sum += nums[high++];

            if(curr_sum === k)
                count++;
        }
    }

    return count;
};