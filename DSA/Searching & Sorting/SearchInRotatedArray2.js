// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/

const search = (arr,target) => {

    if(!Array.isArray(arr)) return 'Invalid array';
    if(arr.length === 0)    return 'Empty Array';

    let s = 0;
    let e = arr.length - 1;

    while (s <= e) {

        let mid = Math.floor((s + e) / 2);

        if (arr[mid] === target) 
            return mid;
        
        if(arr[s] === arr[e]){
            s++;
            continue;
        }
        
        if (arr[s] <= arr[mid]) {

            if (arr[s] <= target && target < arr[mid]) 
                e = mid - 1;
            else 
                s = mid + 1;
        } 
        else {

            if (arr[mid] < target && target <= arr[e]) 
                s = mid + 1;
            else 
                e = mid - 1;
        }
    }

    return -1;    
}
const arr = [5,1,3], target = 5;

console.log("Index: ",search(arr,target));