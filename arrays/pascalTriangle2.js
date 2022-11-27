"use strict";

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of
// the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above.

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  let triangle = [[1]];

  for (let i = 1; i < rowIndex + 1; i++) {
    let prevRow = triangle[triangle.length - 1];
    let newRow = [1];

    for (let j = 1; j < i; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }
    newRow.push(1);

    triangle.push(newRow);
  }

  return triangle[triangle.length - 1];
};