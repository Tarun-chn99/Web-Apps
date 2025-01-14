// https://www.geeksforgeeks.org/quick-sort-algorithm/

// Partition function
function partition(arr, low, high){

    let i = low - 1;
    let pivot = arr[high];        // Set last element as pivot

    // Move all small elements to left side
    for(let j = low; j <= high-1; ++j){
        if(arr[j] < pivot){
            i++;
            swap(arr,i,j);
        }
    }

    // Move pivot element to right position after smaller elements
    swap(arr,i+1,high);

    return i+1;
}

function partition2(arr, low, high){

    let i = high + 1;
    let pivot = arr[low];        // Set last element as pivot

    // Move all large elements to right side
    for(let j = high; j >= low+1; --j){
        if(arr[j] > pivot){
            i--;
            swap(arr,i,j);
        }
    }

    // Move pivot element to right position after smaller elements
    swap(arr,i-1,low);

    return i-1;
}

// Swap function
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// The QuickSort function implementation
function quickSort(arr, low, high)
{
    if (low < high) {

        // pi is the partition return index of pivot
        let pi = partition2(arr, low, high);
        console.log(low,high,pi)
        // Recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Main driver code
let arr = [ 10, 7, 8, 9, 1, 5 ];
let n = arr.length;

// Call QuickSort on the entire array
quickSort(arr, 0, n - 1);
console.log(arr);