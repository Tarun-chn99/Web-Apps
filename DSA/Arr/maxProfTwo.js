// https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/

function maxProfit(price) {

    // Variables to store the maximum profit after the first and second transactions
    let firstBuy = -Infinity;
    let firstSell = 0;
    let secondBuy = -Infinity;
    let secondSell = 0;

    for (let p of price) {

        // Calculate maximum profit after first buy (negative price to track spending)
        firstBuy = Math.max(firstBuy, -p);

        // Calculate maximum profit after first sell
        firstSell = Math.max(firstSell, firstBuy + p);

        // Calculate maximum profit after second buy
        secondBuy = Math.max(secondBuy, firstSell - p);

        // Calculate maximum profit after second sell
        secondSell = Math.max(secondSell, secondBuy + p);

        console.log(p,firstBuy,firstSell,secondBuy,secondSell);
    }

    // The result is the maximum profit after the second sell
    return secondSell;
}

const price = [10, 22, 5, 75, 65, 80];
console.log(maxProfit(price));