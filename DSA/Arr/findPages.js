// https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1

const isPossible = (arr,n,m,mid) => {

    let studentCount = 1;
    let pageSum = 0;

    for(let i=0; i<n; ++i){

        if(arr[i] + pageSum <= mid){
            pageSum += arr[i];
        }
        else{
            studentCount++;
            
            if(studentCount > m || arr[i] > mid)
                return false

            pageSum = arr[i]
        }
    }
    return true;
}

const findPages = (arr,m) => {

    if(!Array.isArray(arr)) return 'Not an array';
    if(!arr.length) return 'Empty array';

    let n = arr.length;
    let ans = -1;
    let s = 0;
    let e = arr.reduce((acc,num) => acc+=num,0);
    console.log(e)
    let mid = Math.floor((s+e)/2);

    while(s<=e){

        if(isPossible(arr,n,m,mid)){
            ans = mid;
            e = mid-1;
        }
        else{
            s = mid+1;
        }

        mid = Math.floor((s+e)/2);
    }
    
    return ans;
}

const arr = [15, 17 ,20];
console.log(findPages(arr,5));

