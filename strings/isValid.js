"use strict";

// Given a string s containing just the characters '(', ')', '{', '}',
// '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/** Returns true if a string of brackets have corresponding open and close
 * bracket pairs of the same type. Else returns false.
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const open = "({[";
  const close = ")}]";
  let paren = [];

  for (let char of s) {
    if (open.includes(char)) {
      paren.push(char);

    } else if (char === ")") {
      if (paren.pop() !== "(") return false;

    } else if (char === "}") {
      if (paren.pop() !== "{") return false;

    } else if (char === "]") {
      if (paren.pop() !== "[") return false;

    } else {
      return false;
    }
  }

  if (paren.length > 0) return false;

  return true;
};