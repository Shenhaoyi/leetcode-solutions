import { swap } from '../utils';

/**
 * @description: 分治，找到left在最终排序的位置，同时满足左边小于等于和右边大于等于
 * @param {number} nums
 * @param {number} left
 * @param {number} right
 * @return {*}
 */
export const partition = (nums: number[], left: number, right: number): number => {
  let i = left;
  let j = right; // 注意不是right-1
  const base = nums[right]; // 以最右边的元素为基数
  while (i < j) {
    while (i < j && nums[i] <= base) i++; // 找到左边比基数大的位置
    // 1. 找到大于
    // 2. 没找到, 此时 i === j，nums[i] >= base（j是从right开始的，遇到小于的都交换了）
    while (i < j && nums[j] >= base) j--; //找到右边比基数小的位置
    // 1-1. 找到小于，交换即可
    // 1-2. 没找到小于, 此时 i === j, 说明i右边都是大于等于的数，同时nums[i]是大于
    // 2.不进入循环
    if (i < j) {
      swap(nums, i, j);
      // 交换之后，nums[i] < pivot < nums[j]
      // 不能写下面的代码，因为可能会造成 i = j，而 nums[i] 与 pivot 的大小关系不确定
      // i++;
      // j--;
    }
  }
  // nums[i] 一定大于等于base
  swap(nums, i, right);
  return i;
};

/**
 * @description: 内部快速排序
 * @param {number} nums
 */
const quick = (nums: number[], left: number, right: number): void => {
  if (left >= right) return;
  const pivot = partition(nums, left, right); // 枢纽
  // 左右分治，注意区间不要包含pivot
  quick(nums, left, pivot - 1);
  quick(nums, pivot + 1, right);
};

/**
 * @description: 快速排序
 * @param {number} nums
 */
export const quickSort = (nums: number[]): void => {
  if (nums.length <= 1) return;
  quick(nums, 0, nums.length - 1);
};
