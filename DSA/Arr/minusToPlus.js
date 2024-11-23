// move negative toward left and positive to right

let arr = [2,-9,5,6,7,-3];

const reArrange = (arr) => {

    let i=0,
        j=arr.length-1;

    while(i<j){

        while(arr[i] < 0)
            i++;

        while(arr[j] > 0)
            j--;

        if(i<j)
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
}

reArrange(arr);
console.log(arr);