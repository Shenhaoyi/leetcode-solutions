/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  /*
    题解：https://leetcode.cn/problems/reorder-list/solutions/452867/zhong-pai-lian-biao-by-leetcode-solution
    解法1：寻找重点，后半段翻转链表，合并两段链表
      奇数个节点
        01234，slow 找到 2
      偶数个节点
        012345，slow 找到 2
    解法2：用数组存储之后用下标访问进行处理

    备注：解法 1 写法太容易出错了！
  */
  let slow = head;
  let fast = head;
  while (fast?.next?.next /* 注意这个判断条件 */) {
    fast = fast.next.next;
    slow = slow!.next;
  }
  // 断开左半段和右半段
  const leftTail = slow;
  slow = slow!.next;
  leftTail!.next = null;
  // 从 slow 开始反转链表
  const rightHead = reverseLinkedList1(slow);

  mergeLinkedList(head, rightHead);
}
const reverseLinkedList1 = (head: ListNode | null) => {
  if (!head) return head;
  let next = head.next;
  let current = head;
  current.next = null;
  while (next) {
    const temp = next.next;
    next.next = current;
    current = next;
    next = temp;
  }
  return current;
};

// head1 与 head2 的长度相等，或者只多 1 个节点
const mergeLinkedList = (head1: ListNode | null, head2: ListNode | null) => {
  // 一次只接一个节点
  while (head1 && head2) {
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = next1;
    head1 = next1;
    head2 = next2;
  }
};
// @lc code=end
