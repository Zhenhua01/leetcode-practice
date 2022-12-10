"use strict";

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing
// together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let newList = new ListNode(-101);
  let newHead = newList;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2 = list2.next;
    }

    newList = newList.next;
  }

  if (!list1) newList.next = list2;
  if (!list2) newList.next = list1;

  return newHead.next;
};