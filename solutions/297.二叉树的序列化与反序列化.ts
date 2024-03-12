/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
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
  参考题解：https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/solutions/290289/shou-hui-tu-jie-gei-chu-dfshe-bfsliang-chong-jie-f/
  先序遍历序列化，
  反序列化的时候，按照先序遍历再重新连接起来
    buildTree 函数输出节点的顺序就是先序遍历的顺序，只要依次接上就行
*/
const NULL = 'null';
/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  // 先序遍历
  const valList: string[] = [];
  const help = (node: TreeNode | null) => {
    if (!node) {
      valList.push(NULL);
    } else {
      valList.push(String(node.val));
      help(node.left);
      help(node.right);
    }
  };
  help(root);
  return valList.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const list = data.split(',');
  let currentIndex = -1;
  // 按照先序遍历的顺序还原树
  const buildTree = () => {
    currentIndex += 1; // 比shift省操作时间
    const current = list[currentIndex];
    if (current === NULL) {
      // 到叶子节点下方了
      return null;
    } else {
      const root = new TreeNode(Number(current));
      root.left = buildTree(); // 递归构建左子树
      root.right = buildTree(); // 递归构建右子树
      return root;
    }
  };
  return buildTree();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
