
//Find unique element in an array with duplicate integers

const findUnique = (arr,n) => {
    let unique = 0;

    for(let i=0; i<n; ++i)
    unique = unique^arr[i];

    return unique
}

const arrData = prompt("Enter array values followed by space: ");
const arr = arrData.split(" ");
const n = arr.length;

console.log("Given array: ",arr);
console.log("Unique Element: ",findUnique(arr,n));