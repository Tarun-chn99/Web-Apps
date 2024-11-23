// https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1

let arr =  [
    53, 57, 77, 15, 78, 58, 17, 63, 90, 73, 68, 82, 40, 68, 22, 52, 81, 92, 80, 37, 62, 17, 76, 67, 55, 
    56, 20, 22, 37, 71, 65, 7, 30, 93, 1, 1, 90, 46, 36, 74, 0, 37, 76, 69, 39, 97, 39, 30, 14, 89, 74, 
    71, 27, 79, 51, 45, 51, 54, 90, 35, 68, 38, 7, 82, 55, 65, 14, 40, 20, 64, 89, 95, 8, 43, 14, 88, 5, 
    24, 72, 9, 56, 17, 60, 91, 16, 94, 47, 15, 33
  ];

const findLongestConseqSubseq = arr => {
    arr.sort((a,b) =>a-b);
    console.log(arr);
    let maxLen = 0;
    let len=1;
    
    for(let i=0; i<arr.length-1; ++i){
        if(arr[i]+1 === arr[i+1] )
            len++;
        else{ 
            maxLen = maxLen<len ? len : maxLen; 
            console.log(i,maxLen);
            len=1;
        }
    }
    
    return maxLen;
}

console.log("Length: ",findLongestConseqSubseq(arr));


