// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?source=submission-ac

const maxProfit = arr => {

    let buy = arr[0];
    let profit = 0;

    for(let i=1; i<arr.length; ++i){
        if(arr[i] < buy)
            buy = arr[i];
        else if(arr[i] - buy > profit)
            profit = arr[i] - buy;
    }

    return profit;
}