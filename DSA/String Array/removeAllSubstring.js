let s = 'daabcbaabcbc';
let part = 'abc';

const checkSubstring = (arr,subArray,i,j) => {
    
    let substr = arr.slice(i,j);
    if(substr === subArray)
    arr = arr.replace(substr,"");

    return arr;
}

const removePart = (arr,i,j) => {
    console.log("inside removepart");
    let shift = j-i+1;

    for(;i<arr.length-shift;++i){
        arr[i] = arr[shift+i];
    }

    arr.length = arr.length-shift;
    console.log(arr);
}

const removeAllSubstring = (s,part) => {

    if(part.length > s.length) return new Error("Error");
    if(part.length===s.length) return "";
    
    let i=0,j=0;

    while(i < s.length && part.length <= s.length){
        
        if(s[i] === part[0]){
            s = checkSubstring(s,part,i,i+part.length)
            i=0;
            break;
        }
        
        i++;
    }
    
    return s;
}


console.log("Initial: ",s);
console.time();
console.log(removeAllSubstring(s,part));
console.timeEnd();  





