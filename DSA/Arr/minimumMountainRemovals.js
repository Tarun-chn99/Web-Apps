// https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/

class Solution {

    lisLength(arr) {

      const lis = [arr[0]];
      const lisLen = Array(arr.length).fill(1);
  
        for (let i = 1; i < arr.length; i++) {

            if (arr[i] > lis[lis.length - 1]) {
                lis.push(arr[i]);
            } 
            else {
                const index = this.lowerBound(lis, arr[i]);
                lis[index] = arr[i];
                console.log(lis);
            }

            lisLen[i] = lis.length;
        }
      return lisLen;
    }
  
    lowerBound(arr, target) {
        
        let left = 0, right = arr.length;
    
        while (left < right) {

            const mid = Math.floor((left + right) / 2);

            if (arr[mid] < target) 
                left = mid + 1;
            else 
                right = mid;
        }

        return left;
    }
  
    minimumMountainRemovals(nums) {

        const n = nums.length;
        const lis = this.lisLength(nums);

        const reversedNums = [...nums].reverse();
        const lds = this.lisLength(reversedNums).reverse();

        let removals = Infinity;

        for (let i = 0; i < n; i++) 
            if (lis[i] > 1 && lds[i] > 1) 
                removals = Math.min(removals, n + 1 - lis[i] - lds[i]);

        return removals;
    }

}

const nums = [4,3,2,1,1,2,3,1];
const solution = new Solution();
console.log(solution.minimumMountainRemovals(nums)); // Output the minimum number of removals
  

