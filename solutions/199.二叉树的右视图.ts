/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
  // 层序遍历，拿到每一层最后一个元素即可
  const result: number[] = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length) {
    const { length } = queue;
    for (let i = 0; i < length; i++) {
      const current = queue.shift() as TreeNode;
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
      if (i === length - 1) {
        result.push(current.val);
      }
    }
  }
  return result;
}
// @lc code=end
