// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/

const maxOperations = function(nums, k) {
    
    if(!(Array.isArray(nums)))  return 'Invalid array';
    if(nums.length < 2) return 0;
    
    nums.sort((a,b)=>a-b);

    let i = 0, j = nums.length - 1, count = 0;

    while(i<j){

        let total = nums[i] + nums[j];
        
        if(total === k){
            count++;
            i++;
            j--;
        }
        else if(total < k)
            i++;
        else
            j--;
    }
    return count;
};

const maxOperations2 = function(nums, k) {
    
    if(!(Array.isArray(nums)))  return 'Invalid array';
    if(nums.length < 2) return 0;
    
    const mapping = new Map();
    let count = 0;

    for(let i=0; i<nums.length; ++i){
        
        let complement = k - nums[i];

        if(mapping.has(complement) && mapping.get(complement) > 0){
            count++;
            mapping.set(complement, mapping.get(complement) - 1);
        }
        else 
            mapping.set(nums[i] , (mapping.get(nums[i]) || 0) + 1);
        }
    return count;
};
