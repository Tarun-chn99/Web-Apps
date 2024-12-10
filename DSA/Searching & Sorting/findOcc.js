// https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1

const find = (arr, x) => {
    
    if(!(Array.isArray(arr)))   return 'Invalid array';
    if(typeof x !== 'number')   return 'Invalid number';
    if(arr.length === 0)    return 'empty array';
    
    for(let i=0; i<arr.length; ++i){
        
        if(arr[i] === x){
            let j=i;
            while(arr[j] === arr[j+1] && j < arr.length)
                j++;
            return [i,j];
        }
    }
    
    return [-1,-1];
}