"use strict";

// Given a non-negative integer x, return the square root of x rounded down
// to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

/** Returns the square root of input x rounded down to the nearest integer.
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  let leftInt = 0;
  let rightInt = x;

  while (leftInt <= rightInt) {
    let midInt = Math.floor((rightInt + leftInt) / 2);

    if (midInt * midInt === x) {
      return midInt;
    } else if (midInt * midInt < x) {
      leftInt = midInt + 1;
    } else {
      rightInt = midInt - 1;
    }
  }

  return rightInt;
};