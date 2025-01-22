// Find pivot element using binary search

const arr = [3,1,3,3]

export const findPivot = (arr) => {

    if(!Array.isArray(arr)) return 'Invalid array';
    if(!arr.length) return "Empty Array";

    let s=0;
    let e=arr.length-1;

    if(arr[s] < arr[e]) return arr[s];

    let mid = Math.floor(s + (e-s)/2);
    
    while(s<e){
        
        if(arr[s] === arr[e] && e-s+1 > 2){
            e--;
            continue;
        }

        mid = Math.floor(s + (e-s)/2);

        console.log(s,e,mid)

        if(arr[0]>arr[mid]){
            e=mid;
        }
        else{
            s=mid+1;
        } 

    }

    return (s === e ) ? arr[s]: arr[mid];
}

console.log(findPivot(arr));