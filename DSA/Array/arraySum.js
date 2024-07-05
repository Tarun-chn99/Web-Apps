const arr = [1,3,2,4,5,0,9];
const length = arr.length;

const arrSum = (arr,length) => {
   
    let sum=0;
    for(let i=0;i<length;++i)
    sum+=arr[i];
    
    return sum;
}

const arrAverage = (arr,length) => arrSum(arr,length)/length;

console.log(arrSum(arr,length),arrAverage(arr,length));