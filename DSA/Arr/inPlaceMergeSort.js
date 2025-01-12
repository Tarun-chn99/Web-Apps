// https://www.geeksforgeeks.org/in-place-merge-sort/

const nextGap = (gap) => gap <= 1 ? 0 : Math.ceil(gap/2); 

const mergeSort = (arr,s,e) => {
    
    if(!Array.isArray(arr)) return 'Invalid input';

    if(s === e)  return;

    let mid = Math.floor((s+e)/2);

    mergeSort(arr,s,mid);
    mergeSort(arr,mid+1,e);
    mergeArray3(arr,s,mid,e);
}

const mergeArray = (arr,s,mid,e) => {

    let s2 = mid+1;

    if(arr[mid] <= arr[s2])
        return;

    while(s <= mid && s2 <= e){

        if(arr[s] <= arr[s2])
            s++;
        else{

            let val = arr[s2];
            let index = s2;

            while(index !== s){
                
                arr[index] = arr[index-1];
                index--;
            }

            arr[s] = val;

            s++;
            s2++;
            mid++;
        }
    }
}

const mergeArray2 = (arr,s,mid,e) => {

    let i, gap = e-s+1;

    for(gap = nextGap(gap); gap > 0; gap = nextGap(gap)){

        for(i = s; i + gap <= e; ++i){
            
            if(arr[i] > arr[i+gap])
                [arr[i],arr[i+gap]] = [arr[i+gap],arr[i]]
        
        }
    }
}

const mergeArray3 = (arr,s,mid,e) => {

    let mx = Math.max(arr[e],arr[mid]) + 1;

    // Incrementing mx to get value greater then all element by 1
    mx++;

    let i=s,j=mid+1,k=s;

    while(i <= mid && j <= e && k <= e){

        let e1 = arr[i] % mx;
        let e2 = arr[j] % mx;

        if(e1 <= e2){
            arr[k] += (e1 * mx);
            i++;
        }
        else{
            arr[k] += (e2 * mx);
            j++;
        }

        k++;
    }

    while(i <= mid){

        let el = arr[i] % mx;

        arr[k] += (el * mx);

        i++;
        k++;
    }
    
    while(j <= e){

        let el = arr[j] % mx;
        
        arr[k] += (el * mx);

        j++;
        k++;
    }

    for(let i=s; i<=e; ++i){
        arr[i] = Math.floor(arr[i]/mx);
    }
}

const arr = [56, 2, 45,9,1,25,11,0];
mergeSort(arr,0,arr.length-1);
console.log(arr);