/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 双指针解决，一个指针先推进到 n+1（如果删除第一个，则推到null）

  if (!head || !head.next) return null;

  let slow: ListNode | null = head;
  let current: ListNode | null = head;
  for (let i = 1; i <= n; i++) {
    current = current!.next;
  }

  // 判断是否是第一个进行删除
  if (!current) return head.next; //弃掉头节点

  current = current.next; // 为了找到删除节点的前一个 所以fast指针再推进一个，因为删除第一个的情况已排除，所以最多就是指向第一个null
  //双指针移动
  while (current) {
    slow = slow!.next;
    current = current.next;
  }
  slow!.next = slow!.next!.next;
  return head;
}
// @lc code=end
