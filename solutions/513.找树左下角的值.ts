/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
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

function findBottomLeftValue(root: TreeNode | null): number {
  // 层序遍历 每层先右后左
  function levelOrder(root: TreeNode | null): number[] {
    if (root === null) return [];
    const result: number[] = [];
    const queue = [root];
    while (queue.length > 0) {
      const current = queue.shift() as TreeNode; // shift 改为 pop是错的，因为下面是 push，改了会将下一层的节点 pop()出来
      result.push(current.val);
      current.right && queue.push(current.right);
      current.left && queue.push(current.left);
    }
    return result;
  }
  const result = levelOrder(root);
  return result[result.length - 1];
}
// @lc code=end
