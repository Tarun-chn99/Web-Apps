// https://leetcode.com/problems/4sum-ii/solutions/1460149/javascript-ksum-solution/

var fourSumCount = function(nums1, nums2, nums3, nums4) {

	const addToHash = (i, sum) => {
		// for the 1st half arrays, recursively add count to map
		if (i < pivot) {
			for (const num of list[i]) addToHash(i + 1, sum + num);
		}

		// if sum exist increment count by 1, if NOT set to 1
		else map.set(sum, (map.get(sum) || 0) + 1);
	};

	const complements = (i, sum) => {
		// for the 2nd half array, recursively find complements
		if (i < list.length) {
			for (const num of list[i]) complements(i + 1, sum + num);
		}

		// find complement and add to count
		else if (map.has(-sum)) count += map.get(-sum);
	};

	const list = [nums1, nums2, nums3, nums4];
	const pivot = Math.floor(list.length / 2); // pivot to divide list in half
	const map = new Map();
	let count = 0;

	addToHash(0, 0);
	complements(pivot, 0);

	return count;

};

const fourSumCount = function(nums1, nums2, nums3, nums4) {

    if(!nums1.length || !nums2.length || !nums3.length || !nums4.length)     return 0;

    let cnt = 0;
    let n = nums1.length;

    function twoArraySum(x,y){

        let map = new Map();

        for(let i=0; i<n; ++i){
            for(let j=0; j<n; ++j){
                let z = x[i]+y[j];
                map.set(z , map.get(z) + 1 || 1);
            }
        }
        return map;
    }

    const sum1 = twoArraySum(nums1,nums2);
    const sum2 = twoArraySum(nums3,nums4);
    
    sum1.forEach((value,key) => {

        let complement = 0 - key;
        if(sum2.has(complement)){
            cnt += sum2.get(complement) * sum1.get(key);
        }
    });

    return cnt;
};