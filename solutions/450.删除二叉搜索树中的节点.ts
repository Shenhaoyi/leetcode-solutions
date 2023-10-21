/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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
// 合并左右子树
function mergeLeftAndRight(left: TreeNode, right: TreeNode) {
  let pointer = right;
  while (pointer.left) {
    pointer = pointer.left;
  }
  pointer.left = left;
}
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  // 根据二叉搜索树的性质
  // 如果目标节点大于当前节点值，则去右子树中删除；
  // 如果目标节点小于当前节点值，则去左子树中删除；
  // 如果目标节点就是当前节点，分为以下三种情况：
  // 其无左子：其右子顶替其位置，删除了该节点；
  // 其无右子：其左子顶替其位置，删除了该节点；
  // 其左右子节点都有：其左子树转移到其右子树的最左节点的左子树上，然后右子树顶替其位置，由此删除了该节点。
  // 链接：https://leetcode.cn/problems/delete-node-in-a-bst/solutions/582561/miao-dong-jiu-wan-shi-liao-by-terry2020-tc0o/
  // 1、迭代，代码见下方
  // 2、递归，返回新的根节点
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    // 目标就是root的情况
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    mergeLeftAndRight(root.left, root.right);
    return root.right;
  }
}
// @lc code=end

// =========================================================================
// 查找目标节点
function findTarget(root: TreeNode, target: number) {
  let current: TreeNode | null = root;
  let prev = null; // 当前节点父节点
  while (current) {
    if (current.val === target) {
      break;
    } else if (current.val < target) {
      prev = current;
      current = current.right;
    } else {
      prev = current;
      current = current.left;
    }
  }
  return {
    prev,
    current,
  };
}
function deleteNode2(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;
  const { current, prev } = findTarget(root, key);
  if (!current) return root; // 没找到
  if (!prev) {
    // root就是目标节点
    if (!current!.left || !current!.right) {
      return current!.left || current!.right;
    } else {
      // 找右子树最小的节点，把左子树挂上去
      mergeLeftAndRight(current!.left, current!.right);
      return current!.right;
    }
  } else {
    if (!current!.left || !current!.right) {
      if (prev.left === current) {
        prev.left = current!.left || current!.right;
      } else {
        prev.right = current!.left || current!.right;
      }
    } else {
      // 找右子树最小的节点，把左子树挂上去
      mergeLeftAndRight(current!.left, current!.right);
      if (prev.left === current) {
        prev.left = current!.right;
      } else {
        prev.right = current!.right;
      }
    }
    return root;
  }
}
