/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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
// 时间复杂度空间复杂度都是O(N)
function maxPathSum(root: TreeNode | null): number {
  // 思路：最后的结果肯定是某个节点+它的左右单边子路径，所以每次就按照这个进行求和来比较就行。
  // 深度优先遍历，左右单边路径和+当前，每个节点都这样分析一遍，得后序遍历，这样才能先得到左右
  let result = -Infinity;
  // 当前节点到叶子节点的最大路径和
  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);
    // 更新最终要的计算结果
    const currentSum = left + right + node.val; // 子路径为负，则应该舍弃
    result = Math.max(result, currentSum);
    // 返回从node开始到叶子节点的最大路径和
    return Math.max(left, right) + node.val; // 返回左右路径中的一条
  };
  dfs(root);
  return result;
}
// @lc code=end
