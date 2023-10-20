export const findPath = (
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
