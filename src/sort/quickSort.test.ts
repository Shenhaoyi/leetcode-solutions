import { quickSort, partition } from './quickSort';
import { testSortCases } from './testCases';

test('partition', () => {
  const nums = [1, 5, 4, 2, 3];
  const pivot = partition(nums, 0, 4);
  expect([nums, pivot]).toEqual([[1, 2, 3, 5, 4], 2]);
});

test('quick sort 2', () => {
  testSortCases.forEach((list) => {
    const nums = [...list];
    const target = [...list].sort((a, b) => a - b);
    quickSort(nums);
    expect(nums).toEqual(target);
  });
});
