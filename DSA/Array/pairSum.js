// Program to find pairs whose sum is equal to given S
// All pairs should be in ascending order
// In case more than one pairs, they must be sorted according to first value of each pair

const pairSum = (arr,sum) => {

    for(let i=0; i<arr.length; i++)
        for(let j=i+1; arr.length; ++j)
            if(arr[i] + arr[j] === sum)
                console.log(`(${arr[i]},${arr[j]})`)

}

function findTriplet(arr,sum) {
    arr.sort();
    let result = [];

    for (let i = 0; i < arr.length; ++i){
        for (let j = i + 1; j < arr.length; ++j){
            for (let k = j + 1; k < arr.length; ++k){
                if (arr[i] + arr[j] + arr[k] === sum) {
                    result.push(`${arr[i]},${arr[j]},${arr[k]}`);
                }
            }
        }
    }
    return result;
}

const arr = [2,3,3,5,5,6,9];
arr.sort((a,b) => a-b);
const sum = 12;

console.log(findTriplet(arr,sum));

