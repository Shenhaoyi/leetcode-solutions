import { heapSort } from './heapSort';

test('heap sort', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 6234, 7, 234];
  expect(heapSort(nums)).toEqual(nums.sort((a, b) => a - b));
});
