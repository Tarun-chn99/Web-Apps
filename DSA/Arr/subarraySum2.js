// https://leetcode.com/problems/subarray-sum-equals-k/

const subArraySum = (arr,k) => {

    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<arr.length;i++) {
        sum += arr[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    return count;    
}