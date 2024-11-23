// https://leetcode.com/problems/find-the-duplicate-number/description/

// Ways
//      brute force  ->  TC - o(n^2) TLE
//      sort array and find the duplicate  ->  TC - o(nlogn),  SC - o(n)
//      using set/object/hash map  ->  TC - o(n), SC - o(n)
//      mark visited element negative  -> TC - o(n), SC - o(1)
//      using mod  -> TC - o(n), SC - o(1), in java
//      hash and tortoise method -> fits the requirement with  -> TC - o(n), SC - o(1)


const nums = [3,1,3,4,2];

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];

        console.log(slow,fast);
    } while (slow != fast);
    
    fast = nums[0];
    while (slow != fast) {  
        slow = nums[slow];
        fast = nums[fast];
        console.log(slow,fast);
    }
    return fast;
};

console.log("Repeating number: ",findDuplicate(nums));