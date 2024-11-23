// https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

const arr = [2,4,1,3,5];

class inversionCounter{

    constructor(){
        this.counter = 0;
    }

    countInversion(arr){
        this.mergeSort(arr,0,arr.length-1);
        return this.counter;
    }

    mergeSort(arr,s,e){

        if(s>=e)
            return;

        let mid = Math.floor((s+e)/2);

        this.mergeSort(arr,s,mid);
        this.mergeSort(arr,mid+1,e);
        this.merge(arr,s,mid,e);
    }

    merge(arr, p, q, r) {
        
        let l = q - p + 1;
        let arr1 = new Array(l);
        let l2 = r - q;
        let arr2 = new Array(l2);

        for (let i = 0; i < l; i++) {
            arr1[i] = arr[i + p];
        }

        for (let i = 0; i < l2; i++) {
            arr2[i] = arr[q + i + 1];
        }

        let left = 0, right = 0, k = p;

        while (left < l && right < l2) {

            if (arr1[left] <= arr2[right]) {
                arr[k] = arr1[left];
                left++;
            } else {
                arr[k] = arr2[right];
                right++;
                this.my_counter += (l - left);
            }
            k++;
        }

        while (left < l) {
            arr[k++] = arr1[left++];
        }

        while (right < l2) {
            arr[k++] = arr2[right++];
        }
    }
}