// 使用递归

// 访问当前节点、左子节点、右子节点的顺序

/* 先序遍历 */
export function preOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const help = (node: TreeNode) => {
    result.push(node.val);
    node.left && help(node.left);
    node.right && help(node.right);
  };
  help(root);
  return result;
}

/* 中序遍历 */
export function inOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const help = (node: TreeNode) => {
    node.left && help(node.left);
    result.push(node.val);
    node.right && help(node.right);
  };
  help(root);
  return result;
}

/* 后序遍历 */
export function postOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const help = (node: TreeNode) => {
    node.left && help(node.left);
    node.right && help(node.right);
    result.push(node.val);
  };
  help(root);
  return result;
}
