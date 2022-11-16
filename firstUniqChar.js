"use strict";

// Given a string s, find the first non-repeating character in it and return its
// index. If it does not exist, return -1.

/** Returns the index of the first letter of input string that is not repeated.
 * If there are no non-repeating letters, return -1.
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  let freq = {};

  for (let char of s) {
    freq[char] = (freq[char] + 1) || 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
};