"use strict";

// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false;

  let num = x;
  let rev = 0;

  while (num > 0) {
    rev = (rev * 10) + (num % 10);
    num = Math.floor(num / 10);
  }

  return x === rev;
};