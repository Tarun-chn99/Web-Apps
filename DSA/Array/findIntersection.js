//    Program to find intersection of two array
// 1. The length of each array is greater than zero.
// 2. Both the arrays are sorted in non-decreasing order.
// 3. The output should be in the order of elements that occur in the original arrays.
// 4. If there is no intersection present then return an empty array.

const commonArray = (arr1,arr2) => {

    const len1 = arr1.length;
    const len2 = arr2.length;
    const result = [];

    let i=0,j=0;
    
    while(i<len1 && j<len2){

        if(arr1[i] === arr2[j]){
            result.push(arr1[i]);
            i++;
            j++;
        }
        else if(arr1[i] > arr2[j]){
            j++;
        }
        else{
            i++;
        }
    }

    return result;
}

const arr1 = [2,4,4,6,7,9];
const arr2 = [3];

console.log(arr1);
console.log(arr2);

const intersectedArray = commonArray(arr1,arr2);
console.log("Common Array: ",intersectedArray);