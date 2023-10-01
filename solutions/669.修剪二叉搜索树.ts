/*
 * @lc app=leetcode.cn id=669 lang=typescript
 *
 * [669] 修剪二叉搜索树
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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  // 递归
  if (!root) return root;
  // 情况1：当前节点不在区间内
  if (root.val > high) return trimBST(root.left, low, high);
  if (root.val < low) return trimBST(root.right, low, high);
  // 情况2：当前节点在区间内
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
}
// @lc code=end
