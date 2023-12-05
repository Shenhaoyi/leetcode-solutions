/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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
// @ts-ignore
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  // 回溯
  const result: number[][] = [];
  if (!root) return result;
  const backTrack = (state: number[], sum: number, node: TreeNode) => {
    if (!node.left && !node.right) {
      if (sum === targetSum) result.push([...state]);
      return;
    }
    const list = [node.left, node.right].filter(Boolean) as TreeNode[];
    for (let child of list) {
      state.push(child.val);
      backTrack(state, sum + child.val, child);
      state.pop();
    }
  };
  backTrack([root.val], root.val, root); // 第一步判断的时候假设当前节点已经处理了，所以要把 root 放进去
  return result;
}
// @lc code=end
