// https://leetcode.com/problems/count-good-meals/

const countPairs = (deliciousness) => {

    if(!(Array.isArray(deliciousness))) return 'Invalid paramenter, expected array';
    if(deliciousness.length === 0)  return 'Empty array';

    deliciousness.sort((a,b)=>a-b);
    let map = new Map();
    let res = 0;
    let two = 1;
    for(let i = 0; i < deliciousness.length; i++){        
        while(deliciousness[i]>=two) two*=2;
        if(map.get(two-deliciousness[i])) res+=map.get(two-deliciousness[i]);
        if(map.get(0)&&deliciousness[i]===two/2) res+=map.get(0);
        map.set(deliciousness[i], map.get(deliciousness[i]) + 1 || 1);
    }     
    
    return res % 1000000007;
}

let deliciousness = [1,3,5,7,9];
console.log("Count: ",countPairs(deliciousness));