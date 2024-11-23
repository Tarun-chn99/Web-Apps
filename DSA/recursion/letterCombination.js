// phone keypad letter combination

let digits = '23';
let mapping = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
let output='';
let ans = [];

const letterCombination = (digits,output,index,ans,mapping) => {

    if(!digits.length)
        return;

    if(index >= digits.length){
        ans.push(output);   
        return;
    }

    let number = parseInt(digits[index]);
    let value = mapping[number];

    for(let i=0; i<value.length; ++i){
        output +=value[i];
        letterCombination(digits,output,index+1,ans,mapping);
        output = output.slice(0,output.length-1);
    }

    return ans;
}


letterCombination(digits,output,0,ans,mapping);
console.log("Combination: ",ans);