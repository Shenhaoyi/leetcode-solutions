import { swap } from '../utils';

export const insertionSort = (nums: number[]) => {
  if (nums.length < 2) return;
  for (let i = 0; i < nums.length; i++) {
    let pointer = i;
    while (pointer > 0) {
      if (nums[pointer] < nums[pointer - 1]) {
        swap(nums, pointer, pointer - 1);
      } else {
        break;
      }
      pointer--;
    }
  }
};
