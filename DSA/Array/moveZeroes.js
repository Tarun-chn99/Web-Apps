const arr = [4,2,4,0,0,3,0,5,1,0];
const n = arr.length;

const moveZeroes = (arr,n) => {

    if(n==1 || n==0)
    return arr;

    let i=0,j=0;

    while(i<n){

        if(arr[i] === 0 )
        i++;
        else{
            [arr[j],arr[i]] = [arr[i],arr[j]];
            i++;
            j++;
        }
    }
    console.log(arr);
}
moveZeroes(arr,n);

