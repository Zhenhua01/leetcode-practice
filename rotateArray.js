"use strict";

// Given an array, rotate the array to the right by k steps,
// where k is non-negative.

/** Rotates an array by k number of steps to the right.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const lastIdx = nums.length - 1;
  if (k > nums.length) k = k % nums.length;

  for (let i = 1; i <= k; i++) {
    let lastNum = nums[lastIdx];

    for (let j = lastIdx; j >= 0; j--) {
      if (j === 0) {
        nums[j] = lastNum;
      } else {
        nums[j] = nums[j - 1];
      }
    }
  }

  return nums;
};

// above solution is TC: O(n*k), SC: O(1)
// bottom solution is TC: O(n), SC: O(1)

/** Rotates an array by k number of steps to the right.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  if (k > nums.length) k = k % nums.length;

  nums.unshift(nums.splice(nums.length - k));
};