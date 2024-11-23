// calculate permutation of array of integers

let str = ['a','b','c'];
let ans = [];

const permute = (str,index,ans) => {

    if(index>=str.length){
        ans.push([...str]);
        return;
    }

    for(let j=index; j<str.length; ++j){
        
        [str[index],str[j]] = [str[j],str[index]];
        permute(str,index+1,ans);
        [str[index],str[j]] = [str[j],str[index]];
    }

}

permute(str,0,ans);
console.log("Permutation: ",ans);