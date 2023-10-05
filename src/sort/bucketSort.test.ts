import { bucketSort } from './bucketSort';

test('bucket sort', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 34, 7, 234];
  const target = [...nums].sort((a, b) => a - b);
  expect(bucketSort(nums)).toEqual(target);
});

test('bucket sort 2', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 34, 7, 234];
  const target = [...nums].sort((a, b) => a - b);
  expect(bucketSort(nums, Math.floor(nums.length / 3))).toEqual(target);
});
