// https://www.geeksforgeeks.org/problems/common-elements1132/1

const arr1 = [1, 5, 10, 20, 40, 80] , arr2 = [6, 7, 20, 80, 100] , arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

const commonElements = (arr1,arr2,arr3) => {

    let res = [];

    let i=0,
        j=0,
        k=0,
        len1 = arr1.length,
        len2 = arr2.length,
        len3 = arr3.length;
        
    let last = null;

    while(i<len1 && j<len2 && k<len3){

        if(arr1[i] === arr2[j] && arr2[j] === arr3[k] && arr1[i] !== last){

            last = arr1[i]
            res.push(last);
            i++;
            j++;
            k++;
        }
        else if(Math.min(arr1[i],arr2[j],arr3[k]) === arr1[i])
            i++;
        else if(Math.min(arr1[i],arr2[j],arr3[k]) === arr2[j])
            j++;
        else
            k++;
    }
    return res;
}

console.log("Common elements: ",commonElements(arr1,arr2,arr3));