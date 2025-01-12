
function countValidWords(s) {

    if(typeof s !== 'string' || !s.length) return 0;
    
    let isAlphanumeric = false, 
        isNotAlphanumeric = false,
        isVowel = false, 
        isConsonant = false,
        count = 0,
        i=0,
        j=0,
        n = s.length;
        
    while(j<n){

        if(s[j] !== ' '){
            
            let charCode = s.charCodeAt(j);
            
            if(checkAlphanumeric(charCode))
                isAlphanumeric = true;
            else
                isNotAlphanumeric = true;
                
            if(checkVowel(s[j]))
                isVowel = true;
            
            if(checkConsonant(s[j],charCode))
                isConsonant = true;
                
            if(j+1 === n){
                if((j-i+1) >= 3 && !isNotAlphanumeric && isAlphanumeric && isVowel && isConsonant)
                    count++;
                break;
            }
            j++;

        }
        else{
            
            if(((j-i) >= 3) && !isNotAlphanumeric && isAlphanumeric && isVowel && isConsonant)
                count++;

            isAlphanumeric = false;
            isConsonant = false;
            isVowel = false;
            isNotAlphanumeric = false;

            j++;
            i = j;
        }
    }
    
    return count;

}

const checkNumber = (charCode) => (charCode >= 49 && charCode <= 57);
const checkAlphabet = (charCode) => ((charCode >=65 && charCode <= 90) || (charCode >=97 && charCode <=122));
const checkVowel = (s) => (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u');

const checkConsonant = (s,charCode) => checkAlphabet(charCode) && !checkVowel(s);
const checkAlphanumeric = (charCode) => checkNumber(charCode) || checkAlphabet(charCode);

console.log(countValidWords("this is an example str@ing234"))


