
// Program to find a duplicate integer in array of size n where its values are from 1 -> n-1 and 
// each value comes atleast once and there is one duplicate integer

const findDuplicate1 = (arr,n) => {

    let arraySum = 0;
    for(let i=0; i<n; ++i)
        arraySum += arr[i];

    console.log(arraySum);
    let duplicate = arraySum - ((n*(n-1))/2);
    return duplicate;
}

const findDuplicate2 = (arr,n) => {

    let duplicate = 0;

    for(let i=0; i<n; ++i)
    duplicate = duplicate^arr[i];
    
    for(let i=1; 1<n; ++i)
    duplicate = duplicate^i;

    return duplicate;
}

const arr = [2,1,1,3,4];
const n = arr.length;

const duplicate = findDuplicate2(arr,n);
console.log("Duplicate integer: ",duplicate);