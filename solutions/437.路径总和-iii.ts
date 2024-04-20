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
  if (!root) return result;
  const backTrack = (state: number[], currentNode: TreeNode) => {
    // 已经确保 currentNode 不为 null
    let sum = 0;
    for (let i = state.length - 1; i >= 0; i--) {
      sum += state[i];
      if (sum === targetSum) result++;
    }
    const choices = [currentNode.left, currentNode.right].filter(Boolean) as TreeNode[];
    for (let choice of choices) {
      state.push(choice.val);
      backTrack(state, choice);
      state.pop();
    }
  };
  backTrack([root.val], root);
  return result;
}
// @lc code=end
