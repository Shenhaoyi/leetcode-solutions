/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (nums[m] < target) l = m + 1;
    else r = m;
  }
  // 不存在target
  if (nums[l] !== target) return [-1, -1];

  // l为第一次出现的位置，再找target最后出现的位置
  let result = [l];
  r = nums.length - 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (nums[m] === target) l = m + 1;
    else r = m;
  }
  // 判断找到的位置是大于还是等于target
  result.push(nums[l] === target ? l : l - 1);
  return result;
}
// @lc code=end
