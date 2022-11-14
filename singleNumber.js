"use strict";

// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
//constant extra space.

/** Returns the unique number from a non-empty array of integers.
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  nums.sort((a, b) => (a - b));

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};