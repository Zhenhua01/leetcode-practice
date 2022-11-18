"use strict";

// A phrase is a palindrome if, after converting all uppercase letters
// into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters
// include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/** Returns true if the input string is a valid palindrome, else returns false;
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const lowerCased = s.toLowerCase();
  let convertedStr = "";

  for (let i = 0; i < s.length; i++) {
    let charCode = lowerCased.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      convertedStr += lowerCased[i];

    } else if (charCode >= 48 && charCode <= 57) {
      convertedStr += lowerCased[i];
    }
  }

  for (let i = 0; i < convertedStr.length; i++) {
    if (convertedStr[i] !== convertedStr[convertedStr.length - 1 - i]) return false;
  }

  return true;
};