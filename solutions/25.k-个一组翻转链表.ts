/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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
// 从head开始，翻转k个节点
function reverseLinkedList(head: ListNode, length: number) {
  if (length === 1) return;
  reverseLinkedList(head.next!, length - 1);
  head.next!.next = head;
  head.next = null;
}
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // 快慢指针法
  if (!head) return head;
  if (k === 1) return head;
  //需要记录：上一段的尾部、下一段的头部

  //连接
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let preTail = null;
  let count = 1;
  let result = null;
  while (fast) {
    fast = fast.next;
    count++;
    if (count === k && fast) {
      // 将 slow ~ fast 这段链表进行翻转
      const nextHead: ListNode | null = fast.next; // 下一组的头
      reverseLinkedList(slow!, k); // 翻转k个节点
      // 连接
      if (preTail) {
        // 当前不是第一段则连接
        preTail.next = fast;
      } else {
        // 当前是第一段，赋值整体的头
        result = fast;
      }
      // 重置，进入下一组
      count = 1;
      preTail = slow; // 保存当前的尾巴
      slow = nextHead;
      fast = nextHead;
    }
  }
  preTail && (preTail.next = slow); // 最后一段处理
  return result;
}
// @lc code=end
