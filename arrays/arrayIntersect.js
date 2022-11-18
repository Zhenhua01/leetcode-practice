"use strict";

// Given two integer arrays nums1 and nums2, return an array of their
// intersection. Each element in the result must appear as many times
// as it shows in both arrays and you may return the result in any order.

/** Returns an array containing elements that appear in both input arrays.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function arrayIntersect(nums1, nums2) {
  let output = [];
  let idx1 = 0;
  let idx2 = 0;

  nums1.sort((a, b) => (a - b));
  nums2.sort((a, b) => (a - b));

  while (idx1 < nums1.length && idx2 < nums2.length) {
    if (nums1[idx1] === nums2[idx2]) {
      output.push(nums1[idx1]);
      idx1++;
      idx2++;

    } else if (nums1[idx1] < nums2[idx2]) {
      idx1++;

    } else {
      idx2++;
    }
  }

  return output;
};