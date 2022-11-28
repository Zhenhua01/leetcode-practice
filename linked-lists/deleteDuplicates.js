"use strict";

// Given the head of a sorted linked list, delete all duplicates such that each
// element appears only once. Return the linked list sorted as well.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  let currNode = head;

  while (currNode && currNode.next) {
    if (currNode.val === currNode.next.val) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }

  return head;
};