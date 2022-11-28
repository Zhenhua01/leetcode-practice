"use strict";

// Roman numerals are represented by seven different
// symbols: I, V, X, L, C, D and M.

/** Converts roman numerals to integer format.
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const romanNums = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanNums[s[i]] >= romanNums[s[i + 1]]) {
      sum += romanNums[s[i]];
    } else if (i === s.length - 1) {
      sum += romanNums[s[i]];
    } else {
      sum -= romanNums[s[i]];
    }
  }

  return sum;
}