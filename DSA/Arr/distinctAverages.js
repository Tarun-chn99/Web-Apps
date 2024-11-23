// https://leetcode.com/problems/number-of-distinct-averages/

let arr = [15,77,97,26,53,41,26,13,12,18,17,42,13,33,34,70,48,65,62,78,33,60,96,53,23,14,60,70,57,41,29,12,79,65,52,30];

const distinctAverages = arr => {

    if(arr.length === 2)
        if(arr[0] === arr[1])
            return 2;
        else
            return 1;

    let res = [];

    arr.sort((a,b) => a-b);

    while(arr.length !== 0){

        let min = arr[0];
        let max = arr[arr.length-1];
        let avg = (min+max)/2;

        if (!res.includes(avg)) 
            res.push(avg); 
        
        arr.shift();
        arr.pop();
        
    }

    return res.length;
}

console.log("output: ",distinctAverages(arr));