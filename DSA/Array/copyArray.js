// Write a program to copy an array by iterating the array.

const arr = [2,3,1,4,5];
const xArr = [];

const copyArray = (arr) => {
    for(let index in arr)
        xArr.push(arr[index]);
    console.log(xArr);
}

copyArray(arr);