//  check if array is sorted or not

const isSorted = (arr) => {

    if(arr.length === 0)
        return "Array is empty";

    if(arr.length === 1)
        return true;

    return (arr[0]<arr[1]) ? isSorted(arr.slice(1)) : false;
}

console.log("Is array sorted: ",isSorted([2,4,8,1,9]));