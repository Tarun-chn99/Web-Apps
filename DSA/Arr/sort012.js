let arr = [0,2,1,2,2,1,0,0];

const sort012 = (arr) => {

    let low = 0;
    let mid = 0;
    let high = arr.length-1;

    while(mid<=high){

        if(arr[mid] === 1)
            mid++;
        else if(arr[mid] === 0){
            [arr[mid],arr[low]] = [arr[low],arr[mid]];
            mid++;
            low++;
        }
        else{
            [arr[mid],arr[high]] = [arr[high],arr[mid]];
            high--;
        }
    }
}   
sort012(arr)
console.log("Ans: ",arr);