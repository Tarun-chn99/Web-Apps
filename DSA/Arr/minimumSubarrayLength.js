// https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/

const minimumSubarrayLength = (arr,k) => {

    let n = arr.length;
    let minLen = n+1;
    
    for(let i=0; i<n; ++i){

        let specialArr = arr[i];

        for(let j=i; j<n; ++j){

            specialArr |= arr[j];
            minLen = Math.min(minLen,j-i+1);
        }
    }

    return (minLen > n) ? -1 : minLen;
}

let arr = [3,6,8,11,9], k = 11;

console.log("Min length: ",minimumSubarrayLength(arr,k));