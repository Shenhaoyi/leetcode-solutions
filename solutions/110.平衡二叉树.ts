/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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
// @ts-ignore
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  let result = true;
  if (!root) return result;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  if (Math.abs(leftDepth - rightDepth) > 1) result = false;
  else {
    result = isBalanced(root.left) && isBalanced(root.right);
  }
  return result;
}
// @lc code=end
