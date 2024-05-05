/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode(); // 哨兵节点
  let cur = dummy;
  let carry = 0; // 进位
  while (l1 || l2 || carry) {
    carry = carry + (l1?.val || 0) + (l2?.val || 0); // 上一位的进位+当前的
    cur = cur.next = new ListNode(carry % 10); // 每个节点保存一个数位
    carry = Math.floor(carry / 10); // 新的进位
    if (l1) l1 = l1.next; // 下一个节点
    if (l2) l2 = l2.next; // 下一个节点
  }
  return dummy.next; // 哨兵节点的下一个节点就是头节点
}
// @lc code=end
