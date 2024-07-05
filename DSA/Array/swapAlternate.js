
//Function to swap the alternate elements in array
function swap(arr,n){
    for(let i=0; i<n; i+=2)
    if(i+1<n){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}
                
const arrData = prompt("Enter Array values followed by space: ");
const arr = arrData.split(" ");
const n = arr.length;

console.log("Initial Array: ",arr);
swap(arr,n);
console.log("Swapped Array: ",arr);

  