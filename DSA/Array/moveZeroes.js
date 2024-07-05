import {swap} from './selectionSort.js'

const arr = [0,1,0,3,12];
const n = arr.length;

const moveZeroes = (arr,n) => {

    if(n==1 || n==0)
    return arr;

    let i=0,j=i+1;

    while(i<n && j<n){

        if(arr[j] !== 0 && j>=i)
        j++;
        else if(arr[i] !== 0 && i<j)
        i++;
        else{
            swap(arr,i,j);
            i++;
            j++;
        }
    }


    console.log(arr);
}
moveZeroes(arr,n);