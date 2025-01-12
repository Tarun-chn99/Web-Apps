// https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

const countInv = (arr,l,r) => {

    if(!Array.isArray(arr)) return "Invalid array";
    if(!arr.length) return "Empty array";

    let res = 0;

    if (l < r) {

        let m = Math.floor((r + l) / 2);

        res += countInv(arr, l, m);
        res += countInv(arr, m + 1, r);
        res += countAndMerge(arr, l, m, r);

    }
    
    return res;
}

function countAndMerge(arr,s,m,e){

    let n1 = m - s + 1;
    let n2 = e - m;

    let left = arr.slice(s,m+1);
    let right = arr.slice(m+1,e+1);
    
    let i=0,j=0,k=s;
    let res = 0;

    while(i<n1 && j<n2){
        
        if(left[i] <= right[j]){
            arr[k++] = left[i++]
        }
        else{
            arr[k++] = right[j++];
            res += (n1 - i);
        }
    }

    while(i < n1){
        arr[k++] = left[i++];
    }
    
    while(j < n2){
        arr[k++] = right[j++];
    }

    return res;
}

const arr = [2, 4, 1, 3, 5];
console.log("Inversion count: ",countInv(arr,0,arr.length-1));