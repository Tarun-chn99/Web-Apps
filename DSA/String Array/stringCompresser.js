// https://leetcode.com/problems/string-compression/description/

import { Stack } from "./stack.js";

const stringCompressor = (s) => {

    const myStack = new Stack();
    let i=0,count=1;

    while(i<s.length){

        let top = myStack.peek();
        if(top){
            if(top === s[i]){
                count++;
                i++;
                if(i === s.length)  myStack.push(count.toString());
            }
            else{
                if(count>1){
                    myStack.push(count.toString());
                    count = 1;
                }    
                myStack.push(s[i]);
                i++;
            }
        }
        else{
            myStack.push(s[i]);
            i++;
        }
        
    }
    return myStack.items.join("").split("");
}

const stringCompressor2 = (chars) => {

    let i = 0;
    let ansIndex = 0;
    let n = chars.length;

    while (i<n) {

        let j = i+1;

        while(j<n && chars[i]===chars[j])   j++;

        chars[ansIndex++] = chars[i];
        let count = j-i;

        if(count>1){
            let s = count.toString();
            console.log(s);
            for(let i=0;i<s.length;++i)
            chars[ansIndex++] = s[i];
        }
        i=j;
    }
    chars.length = ansIndex;
    return chars;
}

let s = "abbcccccccccccc";
console.log(stringCompressor2(s.split("")))





























