"use strict";

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer
// range [-2^31, 2^31 - 1], then return 0.

/** Reverses the order of digits of a 32-bit integer. Else returns 0 if the
 * input integer is outside a 32-bit integer range.
 * @param {number} x
 * @return {number}
 */
function reverseInteger(x) {
  let reversed = x.toString().split("").reverse();

  if (x < 0) reversed.unshift(reversed.pop());

  const number = +reversed.join("");

  if (number <= -(2 ** 31) || number >= (2 ** 31) - 1) return 0;

  return number;
};