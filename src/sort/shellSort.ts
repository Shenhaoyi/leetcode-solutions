import { swap } from '../utils';

export const shellSort = (nums: number[]) => {
  const { length } = nums;
  if (length < 2) return;
  let gap = Math.floor(length / 2);
  while (gap > 0) {
    // 按照间隔进行插入排序
    for (let start = 0; start < gap; start++) {
      // start为当前分隔组的排序起始位置，步长诶为gap
      for (let i = start + gap; i < length; i += gap) {
        let pointer = i;
        while (pointer > start && nums[pointer - gap] > nums[pointer]) {
          swap(nums, pointer, pointer - gap);
          pointer -= gap;
        }
      }
    }
    gap = Math.floor(gap / 2);
  }
};
