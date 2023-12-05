/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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
/* 
  注意点：
  1.路径从上到下，不需要始于头，结于尾；
  2.有负数！！！！！！！！！！！！！！！
  思路：
  1.先序遍历+回溯，记录路径上的节点（数组）
    时间复杂度：O(Nlog2N)
  2.前缀和（TODO:以后有空实现下）
*/
// @ts-ignore
function pathSum(root: TreeNode | null, targetSum: number): number {
  let result = 0;
  const backTrack = (state: TreeNode[], node: TreeNode | null) => {
    if (!node) return;
    // 判断当前
    const { length } = state;
    let sum = node.val;
    // 节点本身等于 target 的情况
    if (sum === targetSum) result += 1;
    for (let i = length - 1; i >= 0; i--) {
      sum += state[i].val;
      if (sum === targetSum) result += 1;
    }
    // 继续往下探索
    const childList = [node.left, node.right].filter(Boolean) as TreeNode[];
    for (let child of childList) {
      state.push(node);
      backTrack(state, child);
      state.pop();
    }
  };
  backTrack([], root);
  return result;
}
// @lc code=end
