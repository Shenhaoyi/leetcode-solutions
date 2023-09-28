/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) return null;
  let result: ListNode | null = null;
  // 方法1：2层for循环
  // 方法2：哈希表
  /*
    方法3：
    l1 = a + c
    l2 = b + c
    那么两个链表拼接
    l1+l2 = a+c+b+c
    l2+l1 = b+c+a+c
    则遍历的时候，必在c处碰上
  */
  let currA: ListNode | null = headA;
  let currB: ListNode | null = headB;
  while (true) {
    if (currA === currB) {
      // 如果同时为null肯定表示没有交点
      result = currA;
      break;
    }
    currA = currA === null ? headB : currA.next;
    currB = currB === null ? headA : currB.next;
  }
  return result;
}
// @lc code=end
