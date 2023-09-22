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
  // 递归
  // 空链表/链尾的情况
  // if (head === null || head.next === null) return head;
  // const next = head.next;
  // // 依次反转节点
  // const help = function (before: ListNode, head: ListNode): ListNode {
  //   const next = head.next;
  //   head.next = before;
  //   if (next === null) return head;
  //   return help(head, next);
  // };
  // // 头节点指向
  // head.next = null;
  // return help(head, next);
  //
  // 迭代，比较好理解，也比较省空间
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
// @lc code=end
