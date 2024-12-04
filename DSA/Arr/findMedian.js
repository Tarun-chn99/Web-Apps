// https://www.geeksforgeeks.org/problems/find-the-median0527/1

function findMedian(arr) {
    // code here.
    arr.sort((a,b)=>a-b);
    
    let n = arr.length;
    
    if(n%2){
        return arr[Math.floor(n/2)]
    }
    else{
        let a = arr[Math.floor(n/2)-1];
        let b = arr[Math.floor(n/2)];
        
        return Math.floor((a+b)/2);
    }
}