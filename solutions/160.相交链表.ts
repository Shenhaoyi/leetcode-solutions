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
  if (!headA || !headB) return null;
  let pointerA: ListNode | null = headA;
  let pointerB: ListNode | null = headB;
  while (true) {
    if (pointerA === pointerB) break; // 如果同时为null肯定表示没有交点
    pointerA = pointerA === null ? headB : pointerA.next;
    pointerB = pointerB === null ? headA : pointerB.next;
  }
  return pointerA;
}
// @lc code=end
