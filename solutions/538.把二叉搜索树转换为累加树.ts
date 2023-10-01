/*
 * @lc app=leetcode.cn id=538 lang=typescript
 *
 * [538] 把二叉搜索树转换为累加树
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

function convertBST(root: TreeNode | null): TreeNode | null {
  // 降序遍历=>即反中序遍历
  // 1、迭代
  // const stack = [];
  // let sumValue = 0;
  // let current = root;
  // while (stack.length || current) {
  //   while (current) {
  //     stack.push(current);
  //     current = current.right;
  //   }
  //   current = stack.pop() as TreeNode;
  //   const currValue = current.val;
  //   current.val += sumValue;
  //   sumValue += currValue;
  //   current = current.left;
  // }
  // return root;
  // 2、递归
  let sumValue = 0;
  const help = (node: TreeNode | null) => {
    if (!node) return;
    help(node.right);
    const temp = node.val;
    node.val += sumValue;
    sumValue += temp;
    help(node.left);
  };
  help(root);
  return root;
}
// @lc code=end
