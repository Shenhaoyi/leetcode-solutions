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
  if (!head?.next) return head;
  if (k === 1) return head;
  //需要记录：上一段的尾部、下一段的头部
  const dummyNode = new ListNode(0);
  dummyNode.next = head;

  //连接
  let slow = head;
  let fast = head;
  let preTail = dummyNode;
  let count = 1;
  while (fast && fast.next) {
    fast = fast.next;
    count++;
    if (count === k) {
      const nextHead = fast.next; // 下一组的头
      // 将 slow ~ fast 这段链表进行翻转
      reverseLinkedList(slow!, k); // 翻转k个节点
      // 连接
      preTail.next = fast;
      slow!.next = nextHead;
      // 重置，进入下一组
      preTail = slow!; // 保存当前的尾巴
      if (nextHead) {
        slow = nextHead;
        fast = nextHead;
      } else break;
      count = 1;
    }
  }
  // 若最后一段小于 k，就跳出循环，不做处理了
  return dummyNode.next;
}
// @lc code=end
