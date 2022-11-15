"use strict";

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

/** Returns an array containing a pair of indices that correspond to two values
 * in the input array that add up to to the target number.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i];

    if (numsMap.has(goal) && numsMap.get(goal) !== i) {
      return [i, numsMap.get(goal)];
    }
  }
};