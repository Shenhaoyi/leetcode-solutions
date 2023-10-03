/* 层序遍历 */
export function levelOrder(root: TreeNode | null): number[] {
  if (root === null) return [];
  const result: number[] = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift() as TreeNode;
    result.push(current.val);
    current.left && queue.push(current.left);
    current.right && queue.push(current.right);
  }
  return result;
}
