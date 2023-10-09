import { insertionSort } from './insertionSort';

test('insertion sort', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 34, 7, 234];
  insertionSort(nums);
  const target = [...nums].sort((a, b) => a - b);
  expect(nums).toEqual(target);
});
