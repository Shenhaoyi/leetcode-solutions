/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  /*
    二叉搜索树，进行二分查找，收缩范围，当范围对应的节点为 null 时，就可以插入了
  */
  if (!root) return new TreeNode(val); // 注意 root 为 null 的情况
  let prev = null;
  let current: TreeNode | null = root;
  while (current) {
    if (current.val === val) break;
    if (current.val > val) {
      prev = current;
      current = current.left;
    } else {
      prev = current;
      current = current.right;
    }
  }
  if (prev) {
    if (prev.val > val) {
      prev.left = new TreeNode(val);
    } else {
      prev.right = new TreeNode(val);
    }
  }
  return root;
}
// @lc code=end
