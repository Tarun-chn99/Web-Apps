// https://www.geeksforgeeks.org/problems/value-equal-to-index-value1330/1

function valueEqualToIndex(arr) {

    if(!(Array.isArray(arr)))   return 'Invalid array';
    if(arr.length === 0)    return 'empty array';
    
    let result = [];
    
    for(let i=0; i<arr.length; ++i)
        if(i+1 === arr[i])
            result.push(arr[i]);
    
    return result;
}

console.log(valueEqualToIndex([15, 2, 45, 4 , 7]))