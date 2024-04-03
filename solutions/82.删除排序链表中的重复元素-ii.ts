/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  /*
    思路：
      current 从 dummyNode 开始
      next 和 next.next判断，相等，则找到第一个不同值的节点，与 current 接上即可
  */
  const dummyNode = new ListNode(0); // 解决第一个节点就开始重复的问题
  dummyNode.next = head;
  let current = dummyNode;
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      let pointer: ListNode | null = current.next.next;
      while (pointer && pointer.val === current.next.val) {
        pointer = pointer.next;
      }
      current.next = pointer;
    } else {
      current = current.next;
    }
  }
  return dummyNode.next;
}
// @lc code=end
