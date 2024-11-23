// https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/

const arr = [3,-1,4,-2,2,-4,-1];

const reArrange = arr => {

    let a = [],b = [];
    let n = arr.length;

    for(let i=0; i<n; ++i)
        if(arr[i]>0)
            a.push(arr[i]);
        else
            b.push(arr[i]);

    let i=0,j=0,k=0;

    while(i<a.length && j<b.length){
        if(k%2 === 0){
            arr[k] = a[i];
            i++;
        }
        else{
            arr[k] = b[j];
            j++;
        }
        k++;
    }

    while(i<a.length){
        arr[k] = a[i];
        i++;
        k++;
    }
    while(j<b.length){
        arr[k] = b[j];
        j++;
        k++;
    }

    return arr;
}

console.log("Rearranged: ",reArrange(arr));