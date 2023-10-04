import { quickSort, partition } from './quickSort';

test('partition', () => {
  const nums = [1, 5, 4, 2, 3];
  const pivot = partition(nums, 0, 4);
  expect([nums, pivot]).toEqual([[1, 2, 3, 5, 4], 2]);
});

test('quick sort 1', () => {
  const nums = [5, 4, 3, 2, 1];
  const target = [5, 4, 3, 2, 1].sort((a, b) => a - b);
  quickSort(nums);
  expect(nums).toEqual(target);
});

test('quick sort 2', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 6234, 7, 234];
  const target = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 6234, 7, 234].sort((a, b) => a - b);
  quickSort(nums);
  expect(nums).toEqual(target);
});
