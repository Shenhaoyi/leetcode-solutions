/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  /*
    要求：下标从 1 开始，翻转第 left 到的 right 位置的节点
  */

  // 设置 dummyNode 是这一类问题的一般做法（不用考虑 left是否等于 1，dummy_node.next一定是头节点，妙啊）
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  let pre = dummy_node;
  // 找到 left 左边一位
  for (let i = 1; i < left; i++) {
    pre = pre.next!;
  }

  /*
    一步操作, | 右边的是需要插到左边的
    [1,(2,|3,4),5]
    [1,(3,2,|4),5]
  */

  // 依次将节点插入到 pre 节点右边一位，右边的顺位
  const cur = pre!.next; // cur作为子链表的尾巴，不变
  for (let i = left; i < right; i++) {
    // 抽离节点
    const workNode = cur!.next;
    cur!.next = workNode!.next;
    // 插入节点
    workNode!.next = pre.next;
    pre.next = workNode;
  }
  return dummy_node.next;
}
// @lc code=end

/*
  思路：子链表翻转，然后两头拼接
  搞了半天也没有通过，放弃，各种坑
*/
function reverseBetween2(head: ListNode | null, left: number, right: number): ListNode | null {
  /*
    要求：下标从 1 开始，翻转第 left 到的 right 位置的节点
    边界情况：链表为空，不过提示中明确会大于 0 ；left 为链表的头，或者 right 为链表的尾巴；
  */
  if (!head) return head;
  if (left === right) return head;
  let newHead: ListNode | null = null;

  // 子链表
  let subHead: ListNode | null = null;
  let subTail: ListNode | null = null;

  // 被子链表截断之后的左右链表
  let leftTail: ListNode | null = null;
  let rightHead: ListNode | null = null;

  let pointer: ListNode | null = head;
  // 找到初始位置left，记录待连接节点
  let count = 1;
  if (left !== 1) {
    newHead = head;
    while (count < left && pointer) {
      count++;
      if (count === left) {
        // 此时 pointer 指向 left 左边一位
        leftTail = pointer;
        subTail = pointer.next;
      }
      pointer = pointer.next;
    }
  }

  let next: ListNode | null = pointer?.next || null;
  pointer && (pointer.next = null);

  // 开始反转: 遇到结束位置right，记录待连接节点
  while (count < right && pointer && next) {
    count++;
    let temp = next.next;
    next.next = pointer;
    pointer = next;
    next = temp;
    if (count === right) {
      // 此时，pointer 指向 right
      subHead = pointer;
      rightHead = next;
    }
  }

  if (leftTail) {
    leftTail.next = subHead;
  }

  if (subTail) {
    subTail.next = rightHead;
  }

  if (!newHead) newHead = subHead;

  // 返回内容
  return head;
}
