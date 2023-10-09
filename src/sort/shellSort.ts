import { swap } from '../utils';

export const shellSort = (nums: number[]) => {
  if (nums.length < 2) return;
  let gap = Math.floor(nums.length / 2);
  while (gap > 0) {
    // 按照间隔进行插入排序
    for (let start = 0; start < gap; start++) {
      // start为当前分隔组的排序起始位置
      for (let i = start; i < nums.length; i++) {
        let pointer = i;
        while (pointer > start) {
          if (nums[pointer] < nums[pointer - gap]) {
            swap(nums, pointer, pointer - gap);
          }
          pointer -= gap;
        }
      }
    }
    gap = Math.floor(gap / 2);
  }
};
