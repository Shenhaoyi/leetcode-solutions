import { swap } from '../utils';

export const insertionSort = (nums: number[]) => {
  const { length } = nums;
  if (length <= 1) return;
  for (let i = 1; i < length; i++) {
    let pointer = i;
    while (pointer > 0 && nums[pointer - 1] > nums[pointer]) {
      swap(nums, pointer - 1, pointer);
      pointer--;
    }
  }
};
