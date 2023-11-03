/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  /* 
    快慢指针
    1. 找到第一次相遇的点
    2. 然后两个慢指针分别从头结点和第一次相遇的点出发，那么他们相遇的点就是环的入口
  */
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (fast === slow) break;
  }
  if (!fast || !fast.next) return null;
  slow = head;
  while (fast !== slow) {
    fast = fast!.next;
    slow = slow!.next;
  }
  return fast;
}
// @lc code=end
