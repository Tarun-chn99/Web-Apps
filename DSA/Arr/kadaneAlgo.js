//  kadane algorithm

const arr = [1,2,-3,-1,4];

const maxSubArray = arr => {

    let max = -Infinity;
    let currentSum = 0;

    for(let i=0; i<arr.length; ++i){
        currentSum+=arr[i];
        max = (currentSum >= max) ? currentSum : max;
        if(currentSum<0) currentSum=0;
    }

    return max;
}

const minSubArray = arr => {

    let min = Infinity;
    let currentSum = 0;

    for(let i=0; i<arr.length; ++i){
        currentSum+=arr[i];
        min = (currentSum <= min) ? currentSum : min;
        if(currentSum>0) currentSum=0;
    }

    return min;
}

console.log("Min sub array: ",minSubArray(arr));