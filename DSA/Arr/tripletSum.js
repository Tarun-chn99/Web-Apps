// https://leetcode.com/problems/3sum/

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

const tripletSumPairs2 = (arr,target) => {

    arr.sort((a,b) =>  a-b);
    let ans = 0;

    for(let i=0; i<arr.length; ++i){
        
        let j = i+1;
        let k = arr.length-1;
        
        while(j<k){
            
            let total = arr[i]+arr[j]+arr[k];

            if( total < target){
                ans++
                j++;
            }
            else
                k--;
        }
    }
    return ans;
}

let arr = [-2,0,1,3], target = 2; 

console.log("Is triplet: ",tripletSumPairs2(arr,target));