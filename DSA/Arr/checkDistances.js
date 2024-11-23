// https://leetcode.com/problems/check-distances-between-same-letters/

let s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const checkDistance = (s,distance) => {

    let map = new Map();
    let flag = true;

    for(let i=0; i<s.length; ++i){

        if(map.has(s[i])){
            let space = i - map.get(s[i]) - 1;
            let charCode = s.charCodeAt(i);

            if(distance[charCode-97] !== space)
                flag = false;
        }
        else
            map.set(s[i],i);
    }

    return flag;
}

console.log("Well spaced: ",checkDistance(s,distance));