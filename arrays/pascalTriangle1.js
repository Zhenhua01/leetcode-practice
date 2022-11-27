"use strict";

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  let triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[triangle.length - 1];
    let newRow = [1];

    for (let j = 1; j < i; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }
    newRow.push(1);

    triangle.push(newRow);
  }

  return triangle;
};