
const calculateMaxProfit = (cost,amount) => {
    
    let result = [];

    function backtrack(start, current, currentSum,profit) {

        if (currentSum <= amount) {
            result.push(profit);
        }

        for (let i = start; i < cost.length; i++) {

            if (currentSum + cost[i] > amount) 
                continue; // Skip if adding this element exceeds amount

            current.push(cost[i]);
            profit += Math.pow(2,i);

            backtrack(i + 1, current, currentSum + cost[i],profit);

            profit -= Math.pow(2,i);
            current.pop(); // Backtrack to explore other combinations
        }
    }

    backtrack(0, [], 0,0);

    return result.reduce((acc,curr) => acc = acc < curr ? curr : acc,Number.MIN_SAFE_INTEGER);
}

let cost = [19,78,27,18,20], amount = 25;

console.log(calculateMaxProfit(cost,amount));