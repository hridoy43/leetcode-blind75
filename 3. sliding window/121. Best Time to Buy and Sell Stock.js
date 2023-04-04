// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const testCases = [
    [7,1,5,3,6,4], // output -> profit -> 5
    [7,6,4,3,1], // 0
    [1,2], // 1
]

/**
 * Brute Force with TLE
 * O(n^2)
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        let j = i + 1;

        while(j < prices.length) {
            if ((prices[j] - prices[i]) > profit){
                profit = prices[j] - prices[i]
            }
            j++;
        }
    }
    return profit;
};


/** 
 * Two pointer approach
 * O(n)
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while(right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, (prices[right] - prices[left]));
            right++;
        } else {
            left = right;
            right = left + 1;
        }
    }
    return maxProfit;
};

// console.log(maxProfit(testCases[0]))
// console.log(maxProfit(testCases[1]))
// console.log(maxProfit(testCases[2]))