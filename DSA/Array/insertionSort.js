// Adaptable and stable algorithm

const arr = [4,6,3,9,1,8,22,12,44];
const n = arr.length;

const insertionSort = (arr,n) => {
    
    for(let i=1; i<n; ++i){
        
        let temp = arr[i];
        let j=i

        while(j>0)
            if(arr[j-1]>temp){
                arr[j] = arr[j-1];
                --j;
            }
            else    break;
        
        if(i !== j)
        arr[j] = temp;
    }

    console.log(arr);
}

console.log(arr);
insertionSort(arr,n);