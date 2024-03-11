/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
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

/*
  参考题解及其复杂度分析：https://leetcode.cn/problems/merge-k-sorted-lists/solutions/219756/he-bing-kge-pai-xu-lian-biao-by-leetcode-solutio-2/
*/
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  /*
    解法 2：归并，两两合并之后
      21.合并两个有序链表：时间复杂度是O(2N)
      两两合并的方式的时间复杂度分析
        每一轮拆成 K/2^x 组，每组比较 2^x*N次，所以每一轮整体时间复杂度就是 KN
        而轮数是以二分递减的，log(K)论就比完了，所以时间复杂度就是O(KNlogK)
  */
  if (lists.length < 1) return lists[0] || null;
  let WIPLists = [...lists];
  // 也可使用二分法的递归形式，这里使用数组来维护，比较直观
  while (WIPLists.length > 1) {
    const newWIPLists: (ListNode | null)[] = [];
    while (WIPLists.length > 1) {
      const mergedHead = merge2Lists(WIPLists.pop()!, WIPLists.pop()!);
      newWIPLists.push(mergedHead);
    }
    newWIPLists.push(...WIPLists);
    WIPLists = newWIPLists;
  }
  return WIPLists[0];
}

function merge2Lists(head1: ListNode | null, head2: ListNode | null) {
  if (!head1) return head2;
  if (!head2) return head1;
  if (head1.val < head2.val) {
    head1.next = merge2Lists(head1.next, head2);
    return head1;
  } else {
    head2.next = merge2Lists(head2.next, head1);
    return head2;
  }
}
// @lc code=end

function mergeKLists1(lists: Array<ListNode | null>): ListNode | null {
  /*
    解法 1：每次比较 K 条链表的头节点
    优化：使用小顶堆（优先队列）来维护 K 个头节点，可以将 O(KNK) （因为每次要比较 K 次才得到 1 个，但是总节点数为 KN 个） 优化到 O(KNlogK)，但是写小顶堆比较复杂
  */
  let newHead: ListNode | null = new ListNode(Infinity);
  const { length } = lists;
  for (let i = 0; i < length; i++) {
    const current = lists[i];
    if (current && current.val < newHead.val) {
      newHead = current;
    }
  }
  if (newHead.val > 10000) return null;
  lists[lists.indexOf(newHead)] = newHead.next;
  let wipNode = newHead;
  while (true) {
    let currentMin: ListNode | null = new ListNode(Infinity);
    for (let i = 0; i < length; i++) {
      const current = lists[i];
      if (current && current.val < currentMin.val) {
        currentMin = current;
      }
    }
    if (currentMin.val > 10000) break;
    else {
      lists[lists.indexOf(currentMin)] = currentMin.next;
      wipNode.next = currentMin;
      wipNode = currentMin;
    }
  }
  return newHead;
}
