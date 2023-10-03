// 使用迭代（不太容易记住，尽量使用递归）
// 访问当前节点、左子节点、右子节点的顺序

/* 先序遍历 */
export function preOrder2(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop() as TreeNode;
    result.push(current.val);
    current.right && stack.push(current.right);
    current.left && stack.push(current.left);
  }
  return result;
}

/* 中序遍历 */
export function inOrder2(root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop() as TreeNode;
    result.push(current.val); // 此时已经确保没有left节点
    current = current.right;
  }
  return result;
}

/* 后序遍历: 反先序+reverse */
export function postOrder2(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop() as TreeNode;
    result.push(current.val);
    current.left && stack.push(current.left);
    current.right && stack.push(current.right);
  }
  return result.reverse();
}
