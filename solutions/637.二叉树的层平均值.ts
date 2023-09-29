/*
 * @lc app=leetcode.cn id=637 lang=typescript
 *
 * [637] 二叉树的层平均值
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

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const queue = [root];
  while (queue.length) {
    const levelLength = queue.length; // 记录当前层的节点数量
    let sum = 0;
    for (let i = 0; i < levelLength; i++) {
      const current = queue.shift() as TreeNode;
      sum += current.val;
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    result.push(sum / levelLength);
  }
  return result;
}
// @lc code=end
