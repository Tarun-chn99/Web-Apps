const arr = [1,2,9,3,4,6];
const len = arr.length;

export const findIndex = (arr,len,num) => {
    for(let i=0;i<len;++i)
        if(arr[i]===num)
            return i;
    return null;
}

const index = findIndex(arr,len,9);

if(index)
console.log("Index: ",index);
else
console.log("Element not available");