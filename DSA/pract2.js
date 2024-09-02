const s = "eemckxmckx";
const part = "emckx";

const removeOccurences = (s,part) => {
    
    if(typeof s !== 'string' && typeof part !== 'string')  return new Error("Type error");

    if(s.length < part.length) return s;

    if(s.length === part.length){
        if(s === part) return ''
        else return s;
    }

    let i=0,j=0;
    let partSum = part.split('').reduce((acc,curr) => acc+=curr.charCodeAt(0),0);

    console.log(s);
    while(i < s.length && s.length > part.length){

        let flag=0;
        if(s[i] === part[j]){
            const result = checkSubstring(s,partSum,i,i+part.length-1) && removePart(s,i,i+part.length-1);
            if(result){
                s=result;
                flag=1;
            };
            console.log('Result: ',s);
        }
        i++;
        if(flag !== 0) {
            flag=0;
            i=0;
        }
    }

    return s;
}

const checkSubstring = (s,partSum,i1,j) => {

    let sum=0;
    for(let i=i1; i<=j; ++i ){
        const ascii = s[i].charCodeAt(0);
        sum +=ascii;
    }

    return sum === partSum;
}

const removePart = (s,i,j) =>  s.slice(0,i)+s.slice(j+1,s.length);

console.log("s:",removeOccurences(s,part));