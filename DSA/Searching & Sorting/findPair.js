// https://www.geeksforgeeks.org/problems/find-pair-given-difference1559/1

function findPair(arr, x) {
    // code here
    if(!(Array.isArray(arr)))    return 'Invalid array';
    if(!arr.length)  return "Empty Array";
    
    arr.sort((a,b)=>a-b);
    
    let n = arr.length;
    let i = 0;
    let j = 1;

    while (i < n && j < n) {

        if (i !== j && arr[j] - arr[i] === x) 
            return true;
        else if (arr[j] - arr[i] < x) 
            j++;
        else 
            i++;
    }

    return false;
}

const arr = [42, 12, 54, 69, 48, 45, 63, 58, 38, 60, 24, 42, 30, 79, 17, 36, 91, 43, 89, 7, 41, 43, 65, 49, 47, 6, 91, 30, 71, 51, 7, 2, 94, 49, 30, 24, 85, 55, 57, 41, 67, 77, 32, 9, 45, 40, 27, 24, 38, 39, 19, 83, 30, 42, 34, 16, 40, 59, 5, 31, 78, 7, 74, 87, 22], x=13;
console.log("Ans: ",findPair(arr,x));