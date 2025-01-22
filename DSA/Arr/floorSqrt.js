// https://www.naukri.com/code360/problems/square-root_893351?source=youtube&campaign=love_babbar_codestudio2

const floorSqrt = (n) => {

    if(n === 1) return n;

    let s = 1;
    let e = n;
    let mid = Math.floor((s+e)/2);
    let ans;

    while(s<e){

        mid = Math.floor((s+e)/2);

        let square = (mid*mid);

        if(square === n)
            return mid;
        else if(square < n){
            ans = mid;
            s = mid + 1;
        }
        else
            e = mid - 1;

    }

    return ans;
}

console.log(floorSqrt(7));