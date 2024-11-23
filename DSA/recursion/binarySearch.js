//  find no using binary search

const arr = [15,25,35,45,65];
const s = 0;
const e = arr.length - 1;

const binarySearch = (arr,s,e,num) => {

    if(typeof arr !== 'object')
        return 'Invalid input';

    if(s>e)
        return 'No element found';

    const mid = Math.floor((s+e)/2);

    if(arr[mid] === num)
        return num;
    else if(arr[mid]<num)
        return binarySearch(arr,mid+1,e,num);
    else
        return binarySearch(arr,s,mid-1,num);
}

console.log("Element: ",binarySearch(arr,s,e,75));