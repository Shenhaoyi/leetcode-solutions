import { swap } from '../utils';

export const selectSort = (nums: number[]) => {
  const { length } = nums;
  if (length <= 1) return;
  for (let i = length - 1; i >= 0; i--) {
    let target = i;
    for (let j = 0; j <= i /*等于号要加上，因为每个数都要参与比较*/; j++) {
      if (nums[j] > nums[target]) target = j;
    }
    swap(nums, i, target);
  }
};
