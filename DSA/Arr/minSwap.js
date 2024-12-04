// https://www.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1

const minSwap = (arr,k) => {

    if(!(Array.isArray(arr)))   return "Invalid array";

    let swaps = 0;
    let n = arr.length;
    let i=0,j=i+1;
    
    while(i<n && j<n){
                
        if(arr[i] > k){
            
            while(j < n-1 && arr[j] > k)
                j++;
            
            if(arr[j]<=k){
                [arr[i],arr[j]] = [arr[j],arr[i]];
                swaps++;
            }
        }
        j++;
        i++;
    }

    return swaps;
}

const arr = [4,5,5,6,6,7,7,7,7,7,9,9], k = 7 ;

console.log("Swaps: ",minSwap(arr,k));