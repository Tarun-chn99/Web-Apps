// https://leetcode.com/problems/first-letter-to-appear-twice/description/

const repeatedCharacter = function(s) {
    
    let arr = [];
    
    for(let i=0; i<26; ++i)
        arr.push(0);

    for(let i=0; i<s.length; ++i){

        let charCode = s.charCodeAt(i);
        
        if(arr[charCode-97])
            return s[i];
        
        arr[charCode-97]++;
    }

    return 'No repeated character';
};