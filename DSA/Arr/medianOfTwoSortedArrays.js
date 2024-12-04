// https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/

const medianOfTwoSortedArrays = (arr1,arr2) => {

    let m = arr1.length;
    let n = arr2.length;

    let i = 0, j = 0;
    let m1 = 0, m2 = 0;

    for(let k=0; k <= Math.floor((m+n)/2);++k){

        m1 = m2;

        if(arr1[i] <= arr2[j])
            m2 = arr1[i++];
        else
            m2 = arr2[j++];

        console.log('m1: ',m1,'m2: ',m2);
    }

    if(Math.floor((m+n)%2))
        return m1;
    else
        return Math.floor((m1+m2)/2);
}

function getMedian(arr1, arr2) {
    const n = arr1.length;
    let low = 0, high = n;

    while (low <= high) {
        // Take mid1 elements from arr1
        const mid1 = Math.floor((low + high) / 2);

        // Take mid2 elements from arr2
        const mid2 = n - mid1;

        // Find elements to the left and right of partition in arr1
        const l1 = (mid1 === 0) ? -Infinity : arr1[mid1 - 1];
        const r1 = (mid1 === n) ? Infinity : arr1[mid1];

        // Find elements to the left and right of partition in arr2
        const l2 = (mid2 === 0) ? -Infinity : arr2[mid2 - 1];
        const r2 = (mid2 === n) ? Infinity : arr2[mid2];

        // If it is a valid partition
        if (l1 <= r2 && l2 <= r1) {
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
        }

        // If we need to take fewer elements from arr1
        if (l1 > r2) {
            high = mid1 - 1;
        } 
        // If we need to take more elements from arr1
        else {
            low = mid1 + 1;
        }
        console.log('low: ',low,'high: ',high,'mid1: ',mid1,'mid2: ',mid2,'l1: ',l1,'r1: ',r1,'l2: ',l2,'r2: ',r2);
    }

    // Return 0 if no median found (this should not happen with valid input)
    return 0;
}

const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45];

console.log(getMedian(arr1, arr2));

