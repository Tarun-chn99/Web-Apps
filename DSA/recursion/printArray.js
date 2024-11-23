// print array elements

let arr = [1,3,6,8,9];

const printArr = (n) => {

    if(n===-1) return;
    
    printArr(n-1);
    console.log(arr[n]);
}

printArr(arr.length-1);