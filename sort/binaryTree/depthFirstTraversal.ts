// 访问当前节点、左子节点、右子节点的顺序

/* 先序遍历 */
function preOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const help = (node: TreeNode) => {
    result.push(node.val);
    node.left && help(node.left);
    node.right && help(node.right);
  };
  return result;
}

/* 中序遍历 */
function inOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const help = (node: TreeNode) => {
    node.left && help(node.left);
    result.push(node.val);
    node.right && help(node.right);
  };
  return result;
}

/* 后序遍历 */
function postOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const help = (node: TreeNode) => {
    node.left && help(node.left);
    node.right && help(node.right);
    result.push(node.val);
  };
  return result;
}
