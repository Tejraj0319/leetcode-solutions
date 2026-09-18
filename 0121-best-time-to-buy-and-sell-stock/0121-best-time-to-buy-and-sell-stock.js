/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        let currentProfit = prices[i] - minPrice;
        if (currentProfit > profit) {
            profit = currentProfit;
        }
    }
    return profit;
};