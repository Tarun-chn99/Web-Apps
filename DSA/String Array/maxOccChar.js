// Maximum occuring character in string

const maxOccChar = (arr,n) => {

    let alphabetCount = [];
    for(let i=0;i<26;++i)   alphabetCount.push(0);    

    for(let i=0; i<n; ++i){
        
        let characterCode = arr.charCodeAt(i);
        let num = characterCode - 97;

        console.log(characterCode,num);
        if(characterCode >= 97 && characterCode <=122)  alphabetCount[num]++;
    }

    let maxValue = -1,maxIndex=-1;

    for(let i=0; i<26; ++i){
        if(alphabetCount[i]>maxValue){
            maxValue = alphabetCount[i];
            maxIndex = i;
        }
    }

    return String.fromCharCode(maxIndex + 97);
}

let text = 'output';

console.log(maxOccChar(text,text.length));