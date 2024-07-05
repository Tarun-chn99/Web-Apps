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
