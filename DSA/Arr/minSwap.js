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

// Two pointer approach using sliding window
function minSwap2(arr, k) {

    let n = arr.length;
    let count = 0;

    for (let i = 0; i < n; ++i) 
        if (arr[i] <= k) 
            ++count;
 
    let bad = 0;
    for (let i = 0; i < count; ++i) 
        if (arr[i] > k) 
            ++bad;

    let ans = bad;
    console.log("bad: ",bad)
    for (let i = 0, j = count; j < n; ++i, ++j) {

        if (arr[i] > k) 
            --bad;
        
        if (arr[j] > k) 
            ++bad;

        ans = Math.min(ans, bad);
        console.log(i,j,bad,ans);
    }
    return ans;
}

// Without two pointer approach using sliding window
function minSwap3 (arr,k) {

    let count = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) 
        if (arr[i] <= k) 
            count++;

    let bad = 0, ans = Infinity;

    for (let i = 0; i < count; i++) 
        if (arr[i] > k)
           bad++;

    ans = Math.min(ans,bad);

    for (let i = count; i < n; i++) {

        if (arr[i - count] > k)
           bad--;
        
        if (arr[i] > k)
           bad++;

        ans = Math.min(ans,bad);
        console.log(i,i-count,bad,ans)
    }
    return ans;
}


const arr = [2, 7, 9, 5, 4, 7, 8], k = 6 ;

console.log("Swaps: ",minSwap3(arr,k));