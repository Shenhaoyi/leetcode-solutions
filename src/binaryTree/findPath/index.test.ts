import { findPath } from '.';
import { initTree } from '../traversal.test';
import { TreeNode2 } from '../treeNode2';

test('level order', () => {
  let pathP: TreeNode[] = [];
  const root = initTree();
  findPath([root], root, new TreeNode2(7), pathP);
  expect(pathP.map((node) => node.val)).toEqual([3, 2, 7]);
});
