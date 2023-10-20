/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // 先找到节点的路径——使用回溯
  let pathP: (TreeNode | null)[] = [];
  let pathQ: (TreeNode | null)[] = [];
  const findPath = (
    state: (TreeNode | null)[],
    currentNode: TreeNode | null,
    target: TreeNode | null,
    result: (TreeNode | null)[],
  ) => {
    if (!currentNode || !target || result.length) return;

    if (currentNode.val === target.val) {
      result.push(...state);
    } else {
      // 左子树
      // 试探
      state.push(currentNode.left);
      findPath(state, currentNode.left, target, result);
      // 回退
      state.pop();

      // 右子树
      // 试探
      state.push(currentNode.right);
      findPath(state, currentNode.right, target, result);
      // 回退
      state.pop();
    }
  };
  findPath([root], root, p, pathP);
  findPath([root], root, q, pathQ);

  // 找到两条路径的分叉点
  let pointer = 0;
  while (pointer < pathP.length && pointer < pathQ.length) {
    if (pathQ[pointer] !== pathP[pointer]) break;
    pointer++;
  }
  pointer--;

  return pathP[pointer];
}
// @lc code=end
