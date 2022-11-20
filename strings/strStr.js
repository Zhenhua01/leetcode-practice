"use strict";

// Given two strings needle and haystack, return the index of the first
// occurrence of needle in haystack, or -1 if needle is not part of haystack.

/** Returns the starting index of the first character in the needle string if
 * the string can be found in the haystack string, else retruns -1.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (!haystack.includes(needle)) return -1;

  return haystack.indexOf(needle);
};