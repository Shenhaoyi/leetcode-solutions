/**
 * @description: 快速排序，偷懒的写法，牺牲空间复杂度
 * @param {number} nums
 */
export const quickSort2 = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;
  const pivot = Math.floor(nums.length / 2);
  const base = nums[pivot];
  const left: number[] = [];
  const right: number[] = [];
  nums.forEach((current, index) => {
    if (index === pivot) return;
    if (current < base) {
      left.push(current);
    } else {
      right.push(current);
    }
  });
  return [...quickSort2(left), base, ...quickSort2(right)];
};
