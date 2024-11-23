// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/

const arr = [-1,10,6,7,-7,1];

const findMaxK = arr => {

    let n = arr.length;
    let i=0, j=n-1;

    arr.sort((a,b)=>a-b);

    while(i<j){
    
        if(-1*arr[i] === arr[j]){
            return arr[j];
        }
        else if(-1*arr[i] < arr[j])
            j--;
        else
            i++;
    }

    return -1;
}

const findMaxK2 = arr => {

    let n = arr.length;
    let map = new Map();
    let max = null;

    for(let i=0; i<n; ++i){

        let num = Math.abs(arr[i]);
        if(num>max && map.has(arr[i]*-1))
            max = num;
        map.set(arr[i]);
    }

    return !max ? -1 : max;
}


console.log("Max k: ",findMaxK(arr));