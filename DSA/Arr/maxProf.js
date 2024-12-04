// https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
    
    let minSoFar = prices[0];
    let maxProfitSoFar = 0;

    for (let i = 1; i < prices.length; i++) {

        if (prices[i] > minSoFar){

            let currProfit = prices[i] - minSoFar;
            
            maxProfitSoFar = Math.max(maxProfitSoFar,currProfit);
        }
        else 
            minSoFar = Math.min(minSoFar, prices[i]);
    }
    return maxProfitSoFar;
}

const prices = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit(prices));