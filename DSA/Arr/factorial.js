// https://www.geeksforgeeks.org/problems/factorials-of-large-numbers2508/1

let num = 1000;

const fact = N => {
    
        // Initialize result
        let f =  BigInt(1); // Or BigInt 1
        
        // Multiply f with 2, 3, ...N
        for (var i = 2; i <= N; i++)
            f *= BigInt(i);
        
        return f;
}

console.log("List : ",fact(num));