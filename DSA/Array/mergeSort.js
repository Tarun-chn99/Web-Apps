// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m 
// and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored 
// inside the array nums1. To accommodate this, nums1 has a length of m + n, where the 
// first m elements denote the elements that should be merged, and the last n elements are set 
// to 0 and should be ignored. nums2 has a length of n.


var merge = function(arr1, m, arr2, n) {

    let i,j,len;
    i = j = 0;
    len = arr1.length;
    let end_index = len-1; 
    

    while(m>0 && n>0){

        if(arr1[m-1]>arr2[n-1]){
            arr1[end_index] = arr1[m-1];
            m--;
        }
        else{
            arr1[end_index] = arr2[n-1];
            n--;
        }
        end_index--;
    }

    while(m>0){
        arr1[end_index] = arr1[m-1];
        m--;
        end_index--;
    }

    return arr1;

};

const arr1 = [1,2,3,0,0,0],arr2 = [2,4,5];
console.log(merge(arr1,3,arr2,3));