// https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1

const arr = [2, 3, 4];

const maxProduct = arr => {

    let n = arr.length;

    if(n === 1) return arr[0];
    let max = -Infinity;

    for(let i=0; i<n; ++i){
        let prod = 1;
        for(let j=i; j<n; ++j){
            prod *= arr[j];
            if(prod>max)
                max = prod;
        }
    }

    return max;
}

console.log("Max product: ",maxProduct(arr));