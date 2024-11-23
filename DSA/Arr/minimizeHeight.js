// https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1

const arr = [1 ,8 ,10 ,6 ,4 ,6 ,9 ,1];
const k = 7;

const diff = (a,b) => {

    let minDiff = Infinity;

    if((a-k<0 && b-k<0))
        return b-a;

    if(a-k<0){
        if(b-a < b-a-2*k)
            return b-a;
        else
            return b-a-2*k;
    }

    if(b-k<0){
        if(b-a < b-a+2*k)
            return b-a;
        else
            return b-a+2*k;
    }

    if(minDiff>b-a && b-a>=0)
        minDiff=b-a;
    if(minDiff>b-a-2*k && b-a-2*k>=0)
        minDiff=b-a-2*k;
    if(minDiff >b-a+2*k && b-a+2*k>=0)
        minDiff=b-a+2*k;

    return minDiff;
}

const getMinDiff = (arr,k) => {

    if(typeof arr !== 'object')
        return new Error("Input, not an object")

    arr.sort((a,b)=> a-b);

    let a=arr[0],
        b=arr[arr.length-1];
    
    return diff(a,b);
}

console.log("Minimized height: ",getMinDiff(arr,k));