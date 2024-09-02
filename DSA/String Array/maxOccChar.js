// Maximum occuring character in string

const maxOccChar = (text) => {

    if(typeof text !== 'string') return new Error("Type error");
    if(text.length === 0) return 'String is Empty';
    if(text.length === 1) return text;

    const charArray = [];
    for(let i=0; i<26;++i)   charArray.push(0);

    for(let i=0; i<text.length; ++i){
        const asciiCode = text[i].charCodeAt(0);
        const charIndex = asciiCode - 97;

        if(asciiCode >= 97 && asciiCode <= 122)
        charArray[charIndex]++; 
    }

    let maxOccCharCount = -1,maxOccCharindex=-1;
    for(let i=0;i<26;++i)
        if(maxOccChar<charArray[i]){
            maxOccCharCount = charArray[i];
            maxOccCharindex=i;
        }

    return (String.fromCharCode(index+97))
}

let text = 'output';

console.log(maxOccChar(text));