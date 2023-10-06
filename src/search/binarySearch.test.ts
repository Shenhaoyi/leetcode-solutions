import { binarySearch } from './binarySearch';

test('binary search', () => {
  const nums = Array(1000);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = i;
  }
  expect(binarySearch(nums, 555)).toBe(555);
});
