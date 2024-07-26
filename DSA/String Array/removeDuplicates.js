// You are given a string s consisting of lowercase English letters. 
// A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

import { Stack } from "./stack.js";

const s = "aaba";

const removeDuplicates = (s) => {

    if(s.length === 1)  return s;

    let myStack = new Stack();

    let i=0;
    while(i<s.length){

        let top = myStack.peek();

        if(top){
            if(top === s[i])
                myStack.pop();
            else
                myStack.push(s[i]);
        }
        else{
            myStack.push(s[i]);
        }
        i++;
    }
    return myStack.items.join("");
}

console.log(removeDuplicates(s));