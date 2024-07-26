// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

const s1 = "eidbaooo";
const s2 = "dsba";

const countChar = (arr) => {
    
    let alphabetCount = [];
    for(let i=0;i<26;++i)   alphabetCount.push(0);    

    for(let i=0; i<arr.length; ++i){
        let characterCode = arr.charCodeAt(i);
        let num = characterCode - 97;
        if(characterCode >= 97 && characterCode <=122)  alphabetCount[num]++;
    }
    return alphabetCount;
}

const checkEquality = (s1,s2) => {
    for(let i=0;i<26;++i)
        if(s1[i] !== s2[i])
        return false;
    return true;
}

const checkEquality2 = (s1,s2) => {
    if(s1.split("").sort().join("") === s2.split("").sort().join(""))    return true;
    return false;
}

const checkInclusion = (s,part) => {

    const partSum = part.split("").reduce((acc,curr)=>acc+=curr.charCodeAt(0),0);

    for(let i=0; i<s.length-part.length+1; ++i){
        
        let sum=0,j=i;

        while(j<i+part.length){
            sum += s.charCodeAt(j);
            j++;
        }

        if(sum === partSum){
            if(checkEquality(countChar(s.slice(i,j)),countChar(part)))
            // if(checkEquality2(part,s.slice(i,j)))
            return true;
        }
    }
    return false;
}

console.log(checkInclusion(s1,s2));

