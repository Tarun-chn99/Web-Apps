// https://www.geeksforgeeks.org/problems/majority-element-1587115620/1

// Approaches
// 1. sort and find -> 0(nlogn)
// 2. Brute force -> o(n^2)
// 3. Map -> 0(n)
// 4. Moore's voting algo -> o(n)

const findMajority = arr => {

    if(!(Array.isArray(arr)))   return 'Invalid array';
    if(arr.length === 1)    return arr[0];
    if(arr.length === 2)    return (arr[0] === arr[1]) ? arr[0] : -1;

    let maj_index=0, count=0;
    let n = arr.length;

    for(let i=1; i<n; ++i){

        if(arr[maj_index] === arr[i])
            count++;
        else
            count--;

        if(count === 0){
            maj_index = i;
            count = 1;
        }
    }

    count=0;

    let cand = arr[maj_index];
    
    for(let i=0; i<n; ++i){
        if(arr[i] === cand)
        count++;
    }

    if(count>Math.floor(n/2))
        return arr[maj_index];
    else
        return -1;
}
let arr = [3,1,3,3,2];

console.log("Majority: ",findMajority(arr));