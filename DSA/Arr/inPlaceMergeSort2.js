// https://www.geeksforgeeks.org/efficiently-merging-two-sorted-arrays-with-o1-extra-space/

const nextGap = (gap) => gap <= 1 ? 0 : Math.ceil(gap/2);

const merge = (arr1,arr2,m,n) => {

    let i, j, gap = n+m;

    for(gap = nextGap(gap); gap > 0; gap = nextGap(gap)){

        // Compare elements in first array
        for(i = 0; i + gap < m; ++i){
            if(arr1[i] > arr1[i+gap])
                [arr1[i],arr1[i+gap]] = [arr1[i+gap],arr1[i]]
        }

        // Compare elements from both array
        for(j = gap > m ? gap-m : 0 ; i < m && j < n; ++i, ++j){
            if(arr1[i] > arr2[j])
                [arr1[i],arr2[j]] = [arr2[j],arr1[i]]
        }

        // Compare elements in second array
        if(j < n){

            for(j=0; j + gap < n; ++j){
                if(arr2[j] > arr2[j+gap])
                    [arr2[j],arr2[j+gap]] = [arr2[j+gap],arr2[j]]
            }
        }
    }
}

function mergeArray(a, b, n, m) 
{
    let mx = 0;
    
    // Find maximum element of both array
    for(let i = 0; i < n; i++) 
        mx = Math.max(mx, a[i]);
    
    for(let i = 0; i < m; i++) 
        mx = Math.max(mx, b[i]);
    
    
    // Increment by one to avoid collision 
    // of 0 and maximum element of array 
    // in modulo operation
    mx++;
    let i = 0, j = 0, k = 0;
    
    while (i < n && j < m && k < (n + m)) 
    {
        // Recover back original element
        // to compare
        let e1 = a[i] % mx;
        let e2 = b[j] % mx;
        
        if (e1 <= e2)
        {
            // Update element by adding 
            // multiplication with new number

            if (k < n)
                a[k] += (e1 * mx);
            else
                b[k - n] += (e1 * mx);
            
            i++;
            k++;
        }
        else 
        {
            
            // Update element by adding 
            // multiplication with new number

            if (k < n)
                a[k] += (e2 * mx);
            else
                b[k - n] += (e2 * mx);
                
            j++;
            k++;
        }
    }
    
    // Process those elements which 
    // are left in array a
    while (i < n) 
    {
        let el = a[i] % mx;
        
        if (k < n)
            a[k] += (el * mx);
        else
            b[k - n] += (el * mx);
            
        i++;
        k++;
    }
    
    // Process those elements which 
    // are left in array b

    while (j < m) 
    {
        let el = b[j] % mx;
        
        if (k < n)
            a[k] += (el * mx);
        else
            b[k - n] += (el * mx);
            
        j++;
        k++;
    }
    
    // Finally update elements by dividing
    // with maximum element

    for(let i = 0; i < n; i++)
        a[i] = parseInt(a[i] / mx);
    
    // Finally update elements by dividing
    // with maximum element

    for(let i = 0; i < m; i++)
        b[i] = parseInt(b[i] / mx);
    
    return;
}

function mergeArray2(arr1, arr2,n, m){

    // Now traverse the array1 and if
    // arr2 first element
    // is less than arr1 then swap
    for(let i = 0; i < n; i++)
    {
        if (arr1[i] > arr2[0]){

            // Swap
            let temp = arr1[i];
            arr1[i] = arr2[0];
            arr2[0] = temp;

            // After swapping we have to sort the array2
            // again so that it can be again swap with
            // arr1

            // We will store the firstElement of array2
            // and left shift all the element and store
            // the firstElement in arr2[k-1]
            let firstElement = arr2[0];

            let k;

            for(k = 1; k < m && arr2[k] < firstElement; k++)
                arr2[k - 1] = arr2[k];

            arr2[k - 1] = firstElement;
            
        }
    }
}

let a1 = [3,5,6,8,12];
let a2 = [1,4,9,13];

// Function Call
mergeArray2(a1, a2, a1.length, a2.length);

console.log(a1,a2)