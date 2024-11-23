// https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1

const arr = [-1, 0, 1, 2, -1, -4];

const getPairs = arr => {

    let n = arr.length;
    let i=0;
    let j=n-1;
    let pairs = [];
    let last = null;

    arr.sort((a,b)=>a-b);

    while(i<j){
        if(-1*arr[i] === arr[j] && arr[j] !== last){

            last = [arr[i],arr[j]];
            pairs.push(last);
            i++;
            j--;
        }
        else if(-1*arr[i] < arr[j])
            j--;
        else
            i++;
    }
    return pairs;
}


console.log("Pairs: ",getPairs(arr));