// https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/

const morethanNdK = (arr,k) => {

    let n = arr.length;
    let x = Math.floor(n/k);
    let res = [];
    let count = 1;

    arr.sort((a,b) =>a-b);

    for(let i=0; i<n; ++i){

        if(arr[i] === arr[i+1]){
            count++;
            continue;
        }
        else{
            if(count>x)
                res.push(arr[i]);
            count=1;
        }
    
    }
    return res;
}

let arr = [9, 8, 7, 9, 2, 9, 7],k=3;

console.log("Output: ",morethanNdK(arr,k));