// https://www.geeksforgeeks.org/problems/minimum-swaps/1

function minSwaps(arr) {
    // code here
    
    if(!(Array.isArray(arr)))   return "Invalid array";
    if(!(arr.length))   return 'Empty array';
    
    
    let nums = Array.from(arr);
    let count = 0,n = arr.length;
    arr.sort((a,b)=>a-b);

    console.log(nums);
    console.log(arr);
    
    for(let i=0; i<n; ++i)
        if(arr[i] !== nums[i])
            count++;
            
    return Math.floor(count/2);
}

let arr = [32524, 30965, 30657, 18612, 29956, 15628, 16059, 10826, 23546, 22340];
console.log(minSwaps(arr))