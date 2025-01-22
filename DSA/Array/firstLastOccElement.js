// First and last occurence of element in sorted array

export const occurence = (arr,key,occurencePosition) => {

    let s=0;
    let e=arr.length-1;
    let res=-1;
    let mid = Math.floor(s + (e-s)/2);
    
    while(s<=e){
        
        if(arr[mid]===key){
            
            res = mid;
            if(occurencePosition === "first")
            e = mid-1;
            else
            s = mid+1;

        }
        else if(arr[mid]<key){
            s = mid+1;
        }
        else{
            e = mid-1;
        }
        mid = Math.floor(s + (e-s)/2);
    }

    return res;
}

const occ = (arr,k) => {

    if(!Array.isArray(arr)) return 'Invalid array';
    if(!arr.length) return 'Empty array';

    let s = 0;
    let e = arr.length-1;
    let res = -1;

    while(s<=e){

        let mid = Math.floor((s+e)/2);

        if(arr[mid] === k){
            res = mid;
            e = mid - 1;
        }
        else if(arr[mid] < k)
            s = mid + 1;
        else
            e = mid - 1;
    }

    return res;
}

const arr = [1, 3, 5, 5, 5, 5, 7, 8, 9, 9, 9, 9, 9, 123, 125];

console.log(occ(arr,9))