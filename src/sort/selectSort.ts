import { swap } from '../utils';

export const selectSort = (nums: number[]) => {
  if (nums.length <= 1) return;
  for (let i = nums.length - 1; i >= 0; i--) {
    let target = i;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[target]) {
        target = j;
      }
    }
    swap(nums, i, target);
  }
};
