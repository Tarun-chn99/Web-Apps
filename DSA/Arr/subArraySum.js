// https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1

function subArraySum(arr, x) {
        
    let n = arr.length;
    let curr_sum = 0;
    let i = 0, j = 0;

    while (j < n) {

        curr_sum += arr[j++];

        while (curr_sum > x && i < j) 
                curr_sum -= arr[i++];
        
        if (curr_sum === x)
            return [i+1,j];

    }
    
    return [-1];
}

console.log("sum: ",subArraySum([-1,-1,1],0))