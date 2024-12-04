//  https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1

function findMinDiff(arr, m) {
    
    arr.sort((a,b)=>a-b);
    let ans = arr[m-1] - arr[0];
    console.log(arr,m)
    for(let i=1; i<=arr.length - m; ++i){
        console.log(arr[i+m-1],arr[i],ans)
        ans = Math.min(ans,arr[i+m-1] - arr[i]);
    }
    
    return ans;
}

let  arr = [8 ,9 ,9 ,5, 11 ,5 ,5 ,9, 6, 11, 10, 5], m = 11;

console.log("Difference: ",findMinDiff(arr,m));