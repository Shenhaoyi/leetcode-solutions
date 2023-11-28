/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  //递归
  function compare(left: TreeNode | null, right: TreeNode | null): boolean {
    //空检测
    if (!left && !right) {
      return true;
    } else if (left && right) {
      if (left.val === right.val) {
        return compare(left.left, right.right) && compare(left.right, right.left);
      } else {
        return false;
      }
    } else return false; // 有一边为空
  }
  return compare(root.left, root.right);
}
// @lc code=end
