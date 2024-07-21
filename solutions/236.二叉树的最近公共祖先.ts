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

// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solutions/234752/zhong-xu-bian-li-bian-yi-ge-kou-jue-bang-zhu-li-ji/
// 空或搜到即返回。左搜搜，右搜搜。左右都有，那就是你；左没便在右，右没便在左
// 有单边target时，返回单边target；有双边target时，返回自身；自身就是target时，返回自身，这种情况覆盖了单边有target，自身也是target的情况
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // 左右都找到target，则是最近的公共祖先
  if (!root) return root;
  const help = (node: TreeNode | null): TreeNode | null => {
    if (!node) return node;
    else if (node === p || node === q) return node; // 找到了
    else {
      // 后序遍历，这样才能在回溯过程中判断左右
      const left = help(node.left);
      const right = help(node.right);
      if (!left) return right;
      else if (!right) return left;
      else {
        // 左边右边分别有target，则当前就是结果！
        return node;
      }
    }
  };
  return help(root);
}
// @lc code=end

function lowestCommonAncestor2(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // 先找路径，再根据路径判断
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
