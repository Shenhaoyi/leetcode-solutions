/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start

//  Definition for singly-linked list.
/* class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
} */

function reverseList(head: ListNode | null): ListNode | null {
  // 1、递归
  // 空链表、链尾（通过递归返回，最后得到表头）的情况
  if (!head || !head.next) return head;
  const newHead = reverseList(head.next);
  // 因为是递归，从尾结点开始，每一步，将右边的节点指向左边的节点，将左边的节点与其左边的节点的连接断开（出了表头，其实这一步是多余的）
  head.next.next = head;
  head.next = null;
  return newHead;
}
// @lc code=end

function reverseList2(head: ListNode | null): ListNode | null {
  // 2、迭代，比较好理解，也比较省空间
  if (head === null || head.next === null) return head;
  let current = head;
  let next = current.next;
  current.next = null;
  while (next) {
    const nextNext = next.next; // 记录下下个节点
    next.next = current; // 每一步只做一件事，就是将链表断掉的地方反向连回来。
    // 下一次迭代的节点
    current = next;
    next = nextNext;
  }
  return current;
}
