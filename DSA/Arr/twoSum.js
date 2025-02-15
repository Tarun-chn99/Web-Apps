// https://leetcode.com/problems/two-sum/description/

const twoSum = function(nums, target) {
    
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];
        
        if(map.has(complement))
            return [map.get(complement),i]
        
        map.set(arr[i],i);
    }

    // Return an empty array if no solution is found
    return [];
};