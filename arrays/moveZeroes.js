"use strict";

// Given an integer array nums, move all 0's to the end of it while maintaining
// the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/** Rearranges integer array in-place with all zeroes moved to the end. Keeps the
 * relative order of the original non-zero elements.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  const numsLength = nums.length;
  let loopCount = 0;
  let idx = 0;

  while (loopCount < nums.length) {
    loopCount++;
    if (nums[idx] === 0) {
      nums.push(...nums.splice(idx, 1));
    } else {
      idx++;
    }
  }
};