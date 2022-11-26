"use strict";

// Given an integer n, return true if it is a power of three. Otherwise,
// return false.

// An integer n is a power of three, if there exists an integer x
// such that n == 3x.

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  if (n <= 2) {
    return false;
  } else if (Number.isInteger(Math.log10(n) / Math.log10(3))) {
    return true;
  } else {
    return false;
  }
};