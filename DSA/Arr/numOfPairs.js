// https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/

const numOfPairs = function(nums, target) {
    
    if(!(Array.isArray(nums)))  return "Invalid array";
    if(nums.length < 2) return 'Unsifficient array size';

    const freqMap = new Map();
    let count = 0;

    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (const num of nums) {

        const complement = target.slice(num.length);

        if (num + complement === target && freqMap.has(complement)) {
            count += freqMap.get(complement);

            // Avoid counting (i, i) pairs
            if (num === complement) count--;
        }
    }

    return count;
};

const countPairs = (arr,target) => {

    if(!(Array.isArray(arr)))  return "Invalid array";
    if(arr.length < 2) return 'Unsifficient array size';

    let map = new Map();
    let count = 0;

    for(let val of arr){
        map.set(val,(map.get(val) || 0) + 1);
    }

    for(let val of arr){

        let complement = target.slice(val.length);

        if(val+complement === target && map.has(complement)){
            count += map.get(complement);

            if(val === complement)  count--;
        }
    }

    return count;
}

let nums = ["123","4","12","34"], target = "1234";
console.log("Pair count: ",numOfPairs(nums,target));