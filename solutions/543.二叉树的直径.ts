/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  // 后续遍历：每个节点都计算自己到叶子节点的最大深度
  // 空或者只有一个节点检测（删掉也不影响）
  if (!root || (!root.left && !root.right)) return 0;
  let max = 0;
  // 求深度的时候，计算以节点为根的直径
  const maxDepth = (root: TreeNode | null): number => {
    // 空检测
    if (!root) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    max = Math.max(leftDepth + rightDepth, max); // 不是包含节点数，路径是边数
    return Math.max(leftDepth, rightDepth) + 1;
  };
  maxDepth(root);
  return max;
}
// @lc code=end
