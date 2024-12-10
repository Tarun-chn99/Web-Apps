// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

const twoSum = function(arr, target) {
        
    if(!(Array.isArray(arr)))   return 'Invalid input';

    if(typeof target !== 'number')  return 'Expected target to be number';

    let n = arr.length;
    
    if(n === 0 || n === 1) return "length less than 2 not allowed";

    let i=0,j=n-1;

    while(i<j){

        let sum = arr[i] + arr[j];

        if(sum ===  target)
            return [i+1,j+1];
        else if(sum > target)
            j--;
        else
            i++;
    }

    return [-1,-1];
};