// Find the peak index of array that forms a mountain with its array values


const inputArray = prompt("Enter values : ");
const arr = inputArray.split(" ").map((elem)=>parseInt(elem));

const peakIndex = (arr) => {

    let s=0;
    let e=arr.length-1;
    let index=-1;
    let mid = Math.floor(s + (e-s)/2);
    
    while(s<e){

        if(arr[mid]<arr[mid+1]){
            s = mid+1;
        }
        else{
            e = mid;
        }

        mid = Math.floor(s + (e-s)/2);
    }

    return s;
}

console.log("Peak index: ",peakIndex(arr));