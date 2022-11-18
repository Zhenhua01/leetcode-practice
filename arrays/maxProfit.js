"use strict";

// You are given an array prices where prices[i] is the price of a given stock
// on the ith day. You want to maximize your profit by choosing a single day to
// buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

/** Returns the maximum one-time profit from an array of daily of prices.
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let buyPrice = prices[0];

  for (let i = 0; i < prices.length; i++){
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else if (prices[i] - buyPrice > maxProfit) {
      maxProfit = prices[i] - buyPrice;
    }
  }

  return maxProfit;
};