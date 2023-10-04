import { heapSort, heapSort2 } from './heapSort';

test('heap sort', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 6234, 7, 234];
  const target = [...nums].sort((a, b) => a - b);
  expect(heapSort(nums)).toEqual(target);
});

test('heap sort 2', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 6234, 7, 234];
  const target = [...nums].sort((a, b) => a - b);
  expect(heapSort2(nums)).toEqual(target);
});
