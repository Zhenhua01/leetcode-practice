"use strict";

// Given an integer array nums, find the subarray which has the largest
// sum and return its sum.

/** Returns the max sum of a subarray of an array of integers.
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // starts over at next num if current num makes the sum too low
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
};