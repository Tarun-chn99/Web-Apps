// https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1

const arr = [4, 2, -3, 1, 6];

const subArrayExists = arr => {

    let n = arr.length;
    let map = new Map();
    let sum=0

    for(let i=0; i<n; ++i){
        sum+=arr[i];
        if(map.has(sum) || sum === 0)
            return true;
        map.set(sum);
    }
    return false;
}

console.log("Sub array exists: ",subArrayExists(arr))