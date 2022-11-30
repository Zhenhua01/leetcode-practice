"use strict";

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.

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
 * @return {number}
 */
function maxDepth(root) {
  if (root == null) return 0;

  if (!root.left && !root.right) return 1;

  if (!root.left) return maxDepth(root.right) + 1;

  if (!root.right) return maxDepth(root.left) + 1;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};