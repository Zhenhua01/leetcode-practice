"use strict";

// Given the roots of two binary trees p and q, write a function to check
// if they are the same or not.

// Two binary trees are considered the same if they are structurally identical,
// and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  let stackP = [p];
  let stackQ = [q];

  while (stackP.length && stackQ.length) {
    let nodeP = stackP.pop();
    let nodeQ = stackQ.pop();


    if (!nodeP && !nodeQ) continue;
    if (!nodeP || !nodeQ) return false;
    if (nodeP.val !== nodeQ.val) return false;

    stackP.push(nodeP.left);
    stackP.push(nodeP.right);

    stackQ.push(nodeQ.left);
    stackQ.push(nodeQ.right);
  }

  return true;
};