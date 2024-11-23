// calculate largest element of array

let arr = [12,65,11,34,5];

const largest = arr => {

    if(typeof arr !== 'object')
        return 'Invalid input';

    if(arr.length === 1)
        return arr[0];

    const max = largest(arr.slice(1));

    return (arr[0] > max ? arr[0] : max)
}

console.log(largest(arr));