// https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/

function search(arr, n, x, k) 
{ 

    var i = 0; 
    while (i < n) 
    { 
        if (arr[i] == x) 
            return i; 

        i = i + Math.max(1, Math.abs(arr[i]-x)/k); 
    } 
    
    return -1; 
} 