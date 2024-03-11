/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length) {
    const { length } = queue;
    const level: number[] = [];
    for (let i = 0; i < length; i++) {
      const current = queue.shift() as TreeNode;
      level.push(current.val);
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    result.push(level);
  }
  return result;
}
// @lc code=end
