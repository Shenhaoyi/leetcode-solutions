import { swap } from '../utils';

export const bubbleSort = (nums: number[]) => {
  const { length } = nums;
  if (length <= 1) return;
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
};
