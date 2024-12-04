// https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1

const tripletSumPairs = (arr,target) => {

    arr.sort((a,b) =>  a-b);
    let ans = [];

    for(let i=0; i<arr.length; ++i){
        
        if (i > 0 && arr[i] === arr[i-1]) 
            continue;
        
        let j = i+1;
        let k = arr.length-1;
        
        while(j<k){
            
            let total = arr[i]+arr[j]+arr[k];

            if( total === target){
                ans.push([arr[i],arr[j],arr[k]])
                j++;
        
                while (arr[j] === arr[j-1] && j < k) 
                j++;
            }
            else if(total > target)
                k--;
            else
                j++;
        }
    }
    return ans;
}

let arr = [-1,0,1,2,-1,-4], target = 0; 

console.log("Is triplet: ",tripletSumPairs(arr,target));