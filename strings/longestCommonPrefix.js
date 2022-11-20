"use strict";

// Write a function to find the longest common prefix string amongst
// an array of strings.

// If there is no common prefix, return an empty string "".

/** Returns the longest common prefix as a string from an array of strings.
 * Returns an empty tring "" if there is no common prefix.
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  const firstWord = strs[0];
  let output = "";

  for (let i = 0; i < firstWord.length; i++) {
    let letter = firstWord[i];

    for (let word of strs) {
      if (word[i] !== letter) return output;
    }
    output += letter;
  }

  return output;
};