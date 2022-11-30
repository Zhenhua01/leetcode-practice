"use strict";

// Given the root of a binary tree, return the preorder traversal of
// its nodes' values.

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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  let output = [];

  function traverse(currNode) {
    if (!currNode) return;

    output.push(currNode.val);
    traverse(currNode.left);
    traverse(currNode.right);
  }

  traverse(root);

  return output;
};