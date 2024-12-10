// https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1

const findTwoElement = (arr) => {

    if(!(Array.isArray(arr)))   return 'Invalid array';
    if(!arr.length) return 'Empty array';

    let map = new Map();
    let a,b;

    for(let i=0; i<arr.length; ++i){

        if(map.has(arr[i]))
            b = arr[i];
        else
            map.set(arr[i],1);
    }

    for(let i=0; i<arr.length; ++i){
        if(!(map.has(i+1)))
            a = i+1;
    }

    return [b,a];
}

const findTwoElement2 = (arr) => {

    if(!(Array.isArray(arr)))   return 'Invalid array';
    if(!arr.length) return 'Empty array';

    let tracker = [];
    for(let i=0; i<=arr.length; ++i)
        tracker.push(0);

    let a,b;

    for(let i=0; i<arr.length; ++i)
        tracker[arr[i]]++;
    
    for(let i=1; i<=tracker.length; ++i){

        if(tracker[i] === 2)
            b = i;
        
        
        if(tracker[i] === 0)
            a = i;
        
    }
    return [b,a];
}

const findTwoElement3 = (arr) => {

    if(!(Array.isArray(arr)))   return 'Invalid array';
    if(!arr.length) return 'Empty array';

    let xor = 0,sum = 0,n = arr.length;

    for(let i=1; i<=n; ++i){
        xor ^= i;
        xor ^= arr[i-1];
        sum += arr[i-1];
    }

    let b = xor;
    let a = (n*(n+1))/2 - sum + b;

    return [a,b];
}

let arr = [1,1,2,3,4,6];
console.log("[a,b]: ",findTwoElement3(arr));