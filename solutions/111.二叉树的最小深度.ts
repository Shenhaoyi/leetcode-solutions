/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  // 1、层序遍历
  if (!root) return 0;
  const queue: TreeNode[] = [root];
  let depth = 0;
  while (queue.length) {
    const { length } = queue;
    depth += 1;
    for (let i = 0; i < length; i++) {
      const current = queue.shift() as TreeNode;
      if (!current.left && !current.right) return depth;
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }
  return depth; // 应付 ts 报错
}
// @lc code=end

function minDepth2(root: TreeNode | null): number {
  // 2、递归先序遍历
  if (!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  // 如果有一边为 null，则说明还没到叶子节点，不能取 0，还需要往下遍历
  if (left === 0 || right === 0) return left + right + 1;
  return Math.min(left, right) + 1;
}
