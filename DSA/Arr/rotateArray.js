//  rotate array by n element

let arr = [7278 ,14578 ,18545 ,22911 ,23458 ,6535 ,9822 ,12790];
let ans = [];
let k = 1;

const rotate = (arr,k) =>  {
    
    const rotate = (arr,k) => {
        
        let n = arr.length;

        if(!n || n === 1)
            return;

        for(let i=0; i<n; ++i)
            ans[(i+k)%n] = arr[i];
        
        for(let i=0; i<n; ++i)
            arr[i] = ans[i];
    }
    rotate(arr,k);
}

rotate(arr,k);
console.log(arr);
