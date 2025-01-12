// https://leetcode.com/problems/4sum/

const fourSum = function(arr, target) {

    arr.sort((a,b)=>a-b);
    let ans = [];

    for(let i=0; i<arr.length-3; ++i){
        
        if(i>0 && arr[i] === arr[i-1])
            continue;

        for(let j=i+1;j<arr.length; ++j){

            if(j>i+1 && arr[j] === arr[j-1])
                continue;

            let k = j+1;
            let l = arr.length-1;

            while(k<l){

                let total = arr[i]+arr[j]+arr[k]+arr[l];
                if(total === target){
                    ans.push([arr[i],arr[j],arr[k],arr[l]]);
                    k++;
                    while(k<l && arr[k] === arr[k-1])
                        k++;
                }
                else if(total>target)
                l--;
                else
                k++;
            }

        }
    }

    return ans;
};

let arr = [10 ,2 ,3 ,4 ,5 ,7 ,8], target=23;
console.log(fourSum(arr,target));