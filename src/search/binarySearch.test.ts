import { binarySearch, binarySearch2 } from './binarySearch';

test('binary search', () => {
  const nums = Array(1000);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = i;
  }
  expect(binarySearch(nums, 555)).toBe(555);
});

test('binary search 2', () => {
  const nums = Array(1000);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = i;
  }
  expect(binarySearch2(nums, 555)).toBe(555);
});
