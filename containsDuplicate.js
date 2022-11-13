"use strict";

// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.

/** Returns true if any value in array contains a duplicate,
 * else returns false if every value is unique.
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const unique = new Set(nums);

  return unique.size !== nums.length;
};