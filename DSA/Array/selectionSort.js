
export const swap = (arr,i,j) => {

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const selectionSort = (arr,n) => {
    
    for(let i=0;i<n-1;++i){
        let min = i;
        for(let j=i+1;j<n;++j)
            if(arr[min] > arr[j])                   // not used equality operator, so the algorithm is stable
                min = j;

        swap(arr,i,min);
    }
    return arr;
}
