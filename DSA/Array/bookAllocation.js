const arr = [10,20,30,40];

const isPossibleSoution = (arr,n,m,mid) => {

    let studentCount=1;
    let pageSum = 0;

    for(let i=0; i<n; ++i)
        if(pageSum+arr[i]<=mid)     pageSum +=arr[i];
        else{
            studentCount++;
            if(studentCount>m || arr[i]>mid)    return false;
            pageSum = arr[i];
        }
    
    return true;
}

const allocateBooks = (arr,m) => {
    
    let s = 0;
    let e = arr.reduce((acc,curr)=>acc+=curr,0);
    let mid = s + Math.floor((e-s)/2);
    let ans = -1;
    let n = arr.length;

    while(s<=e){

        if(isPossibleSoution(arr,n,m,mid)){
            ans = mid;
            e = mid-1;
        }
        else{
            s = mid+1;
        }

        mid = s + Math.floor((e-s)/2);
    }
    return ans;
}

console.log(allocateBooks(arr,3));