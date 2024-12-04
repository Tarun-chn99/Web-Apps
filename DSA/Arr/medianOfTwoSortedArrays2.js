// https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/

const medianOfTwoSortedArrays = (arr1,arr2) => {

    let m = arr1.length;
    let n = arr2.length;

    let i = 0, j = 0, k = 0, mid = Math.floor((m+n)/2);
    let m1 = 0, m2 = 0;
    

        while(k <= mid && i<m && j<n ){
            
            m1 = m2;

            if(arr1[i] <= arr2[j])
                m2 = arr1[i++];
            else
                m2 = arr2[j++];
        
            k++;
        }
        
        while(i<m && k<= mid){
            m1 = m2;
            m2 = arr1[i++];
            k++;
        }

        while(j<n && k<= mid){
            m1 = m2;
            m2 = arr2[j++];
            k++;
        } 
    
    if(Math.floor((m+n)%2))
        return m2;
    else
        return (m1+m2)/2;
}

const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45];

console.log(medianOfTwoSortedArrays(arr1, arr2)); 