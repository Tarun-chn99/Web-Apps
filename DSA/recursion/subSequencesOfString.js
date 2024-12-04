//  generate subsequences of string exculing empty string

const str = 'abc';
const output='';
let ans='';

const subSeqence = (str,output,index) => {

    if(index >=str.length){
        if(output !== '')
        ans+=output+' ';
        return;
    }

    subSeqence(str,output,index+1);

    let element = str[index];
    output+=element;
    subSeqence(str,output,index+1);
}

subSeqence(str,output,0);
console.log(ans)