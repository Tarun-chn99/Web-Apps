// https://www.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x5651/1

const smallestSubWithSum = (arr, x) => {
    
    let n = arr.length;
    let curr_sum = 0, min_len = n+1;
    let i = 0, j = 0;

    while (j < n) {

        curr_sum += arr[j++];

        while (curr_sum >= x && i < n) {

            if (j - i < min_len) 
                min_len = j - i;
            
            curr_sum -= arr[i++];
        }
    }

    if (min_len > n) 
        return 0;

    return min_len;
}

let x = 51, arr = [1, 4, 45, 6, 0, 19];
console.log("Output: ",smallestSubWithSum(arr,x));