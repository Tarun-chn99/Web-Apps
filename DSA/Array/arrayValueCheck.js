const arr = [1,2,9,3,4,6];
const len = arr.length;
const num = 9;

function valueCheck(arr,len){

    for(let i=0; i<len; ++i)
        if(arr[i]===num)
            return true;
    return false
}

if(valueCheck(arr,len))
console.log("Value present");
else
console.log("Value not present");
