import { swap } from '../utils';

export const insertionSort = (nums: number[]) => {
  if (nums.length < 2) return;
  // 最后一位不需要处理
  for (let i = 0; i < nums.length - 1; i++) {
    let pointer = i;
    while (pointer > 0) {
      if (nums[pointer] < nums[pointer - 1]) {
        swap(nums, pointer, pointer - 1);
      }
      pointer--;
    }
  }
};
