/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (!root) return result;
  const queue: TreeNode[] = [root];
  let level = 1;
  while (queue.length) {
    const { length } = queue;
    const currentResult: number[] = [];
    for (let i = 0; i < length; i++) {
      const current = (level % 2 ? queue.shift() : queue.pop()) as TreeNode;
      currentResult.push(current.val);
      // 确保queue永远是从左到右的
      if (level % 2) {
        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
      } else {
        current.right && queue.unshift(current.right);
        current.left && queue.unshift(current.left);
      }
    }
    result.push(currentResult);
    level++;
  }
  return result;
}
// @lc code=end
