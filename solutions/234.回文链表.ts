/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  let result = true;
  if (!head!.next) return result;
  // 思路，将后半段的节点进行翻转。
  /*
    快指针快速移动
    1 234，从3开始反转 fast: 3, null; slow: 2 3
    头节点后面的节点数量为奇数个N，慢指针指向 (N+1)/2，快指针指向 N+1(null)
    1 2345，从4开始反转 fast: 3, 5; slow: 2 3
    头节点后面的节点数量为偶数个N，慢指针指向 N/2，快指针指向 N(tail)
  */
  // 1.找到翻转的起始位置
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next;
  }
  if (fast) {
    slow = slow!.next; // 确保 slow 在后半段开头
  }
  // 2.将slow到tail进行翻转
  let current = slow;
  let next = current!.next;
  current!.next = null;
  while (next) {
    const temp = next.next;
    next.next = current;
    current = next;
    next = temp;
  }
  // 3.比较2个链表
  let l1 = head;
  let l2 = current;
  while (l1 && l2) {
    if (l1.val !== l2.val) {
      result = false;
      break;
    } else {
      l1 = l1.next;
      l2 = l2.next;
    }
  }
  return result;
}
// @lc code=end
