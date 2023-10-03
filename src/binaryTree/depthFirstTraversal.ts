// 使用递归

// 访问当前节点、左子节点、右子节点的顺序

/* 先序遍历 */
export function preOrder(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const helper = (node: TreeNode) => {
    result.push(node.val);
    node.left && helper(node.left);
    node.right && helper(node.right);
  };
  helper(root);
  return result;
}

/* 中序遍历 */
export function inOrder(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const helper = (node: TreeNode) => {
    node.left && helper(node.left);
    result.push(node.val);
    node.right && helper(node.right);
  };
  helper(root);
  return result;
}

/* 后序遍历 */
export function postOrder(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const helper = (node: TreeNode) => {
    node.left && helper(node.left);
    node.right && helper(node.right);
    result.push(node.val);
  };
  helper(root);
  return result;
}
