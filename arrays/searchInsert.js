"use strict";

// Given a sorted array of distinct integers and a target value, return the
// index if the target is found. If not, return the index where it would be
// if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (nums[midIdx] === target) {
      return midIdx;
    } else if (nums[midIdx] < target) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }

  return leftIdx;
};