"use strict";

// Given the root of a binary tree, check whether it is a mirror of itself
// (i.e., symmetric around its center).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  let stackL = [root.left];
  let stackR = [root.right];

  while (stackL.length && stackR.length) {
    let nodeL = stackL.pop();
    let nodeR = stackR.pop();


    if (!nodeL && !nodeR) continue;
    if (!nodeL || !nodeR) return false;
    if (nodeL.val !== nodeR.val) return false;

    stackL.push(nodeL.left);
    stackL.push(nodeL.right);

    stackR.push(nodeR.right);
    stackR.push(nodeR.left);
  }

  return true;
};