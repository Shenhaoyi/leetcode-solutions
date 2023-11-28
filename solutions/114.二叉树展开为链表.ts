/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */

const localFlatten = (root: TreeNode | null) => {
  if (!root) return root;
  const leftHead = localFlatten(root.left);

  // 找到左子树的最右边的，也就是反中序遍历的第一步
  let leftTail = root.left;
  // 如果一开始就是null，那么head那里会出了，否则不会找到null的
  while (leftTail && leftTail.right) {
    leftTail = leftTail.right;
  }

  const rightHead = localFlatten(root.right);

  // 清空左子树
  root.left = null;

  if (leftHead) {
    root.right = leftHead;
    leftTail!.right = rightHead;
  } else {
    // 左边为null的情况
    root.right = rightHead;
  }

  return root;
};

// 左边转链表，右边转链表，然后按照 root-左链表-右链表的顺序连接起来就行了
function flatten(root: TreeNode | null): void {
  localFlatten(root);
}
// @lc code=end
