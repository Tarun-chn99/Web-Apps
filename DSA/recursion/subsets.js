const nums = [1,2,3,4];
const ans = [];
const output = [];

const powerSet = (nums, output, index, ans) => {
    
    if (index >= nums.length) {
        ans.push([...output]);  // Push a copy of the output array
        return;
    }

    powerSet(nums, output, index + 1, ans);

    let element = nums[index];
    output.push(element);

    powerSet(nums, output, index + 1, ans);

    output.pop();  // Backtrack
};

powerSet(nums, output, 0, ans);
console.log('Power set:', ans);
