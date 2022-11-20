"use strict";

// Given a string s consisting of words and spaces, return the length of the
// last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const trimArr = s.trim().split(" ");

  return trimArr[trimArr.length - 1].length;
};