    // Square root of element using binary search

    let x = 107;

    function limitDecimals(number, decimals) {
        if (isNaN(number)) {
          return number; // Handle non-numeric input
        }
      
        const parts = number.toString().split(".");
        parts[1] = parts[1]?.slice(0, decimals);
      
        return parseFloat(parts.join("."));
    }
      
    const findRoot = (x) => {
        
        if(x===1)   return 1;
        
        let s=0;
        let e=x;
        let mid = s+ Math.floor((e-s)/2);
        let ans = -1;
        let factor = 1;
        
        while(s<=e){
            let Square = mid*mid;

            if(Square === x)  return mid;
            if(Square<x){
                ans = mid;
                s = mid+1;
            }
            else e = mid-1;
            mid = s+ Math.floor((e-s)/2);
        }
        for(let z=1;z<=2;++z){
            factor /= 10;
            for(let i=ans; i*i<=x; i+=factor) 
                ans = i;
        }
        
        return limitDecimals(ans,2);
    }

    let sqrt = findRoot(x);
    console.log("Sqrt: ",sqrt);