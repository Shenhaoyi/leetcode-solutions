/*
 * @lc app=leetcode.cn id=572 lang=typescript
 *
 * [572] 另一棵树的子树
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

// 判断两棵树是否一样
function isEqualTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (node1 && node2) {
    if (node1.val === node2.val) {
      return isEqualTree(node1.left, node2.left) && isEqualTree(node1.right, node2.right);
    } else {
      return false;
    }
  } else if (!node1 && !node2) return true;
  else return false;
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  //递归遍历的
  if (root && subRoot) {
    return isEqualTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  } else if (!root && !subRoot) {
    return true;
  } else {
    return false;
  }
}
// @lc code=end
