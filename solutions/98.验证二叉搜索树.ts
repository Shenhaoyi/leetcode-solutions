/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  // 递归判断左右子树是不对的，不要想简单了！

  // 利用中序遍历升序的特性来判断
  if (!root) return false;
  let result = true;
  const stack = [];
  let current: TreeNode | null = root;
  let preValue = -Infinity;
  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop() as TreeNode;
    if (preValue >= current.val) {
      // 与上一个访问节点的值作比较
      result = false;
      break;
    } else {
      preValue = current.val;
      current = current.right;
    }
  }
  return result;
}
// @lc code=end
