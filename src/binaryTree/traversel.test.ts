import { levelOrder } from './levelOrderTraversal';
import { preOrder, inOrder, postOrder } from './depthFirstTraversal';
import { preOrder2, inOrder2, postOrder2 } from './depthFirstTraversal2';
import { TreeNode2 } from './treeNode2';
/* 
   3
 2   1
7 6 8 9
*/
const initTree = () => {
  const root = new TreeNode2(3);
  root.left = new TreeNode2(2, new TreeNode2(7), new TreeNode2(6));
  root.right = new TreeNode2(1, new TreeNode2(8), new TreeNode2(9));
  return root;
};

test('level order', () => {
  const result = [3, 2, 1, 7, 6, 8, 9];
  const root = initTree();
  expect(levelOrder(root)).toEqual(result);
});

test('preOrder', () => {
  const result = [3, 2, 7, 6, 1, 8, 9];
  const root = initTree();
  expect(preOrder(root)).toEqual(result);
});

test('inOrder', () => {
  const result = [7, 2, 6, 3, 8, 1, 9];
  const root = initTree();
  expect(inOrder(root)).toEqual(result);
});

test('postOrder', () => {
  const result = [7, 6, 2, 8, 9, 1, 3];
  const root = initTree();
  expect(postOrder(root)).toEqual(result);
});

test('preOrder 2', () => {
  const result = [3, 2, 7, 6, 1, 8, 9];
  const root = initTree();
  expect(preOrder2(root)).toEqual(result);
});

test('inOrder 2', () => {
  const result = [7, 2, 6, 3, 8, 1, 9];
  const root = initTree();
  expect(inOrder2(root)).toEqual(result);
});

test('postOrder 2', () => {
  const result = [7, 6, 2, 8, 9, 1, 3];
  const root = initTree();
  expect(postOrder2(root)).toEqual(result);
});
