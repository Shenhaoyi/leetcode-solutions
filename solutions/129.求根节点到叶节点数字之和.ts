/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0;
  let sum = 0;
  const dfs = (node: TreeNode, currentSum: number) => {
    if (!node.left && !node.right) {
      sum += currentSum;
      return;
    }
    if (node.left) dfs(node.left, currentSum * 10 + node.left.val);
    if (node.right) dfs(node.right, currentSum * 10 + node.right.val);
  };
  dfs(root, root.val);
  return sum;
}
// @lc code=end
