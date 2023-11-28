/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
// @ts-ignore
function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (nums[m] < target) l = m + 1;
    else r = m;
  }
  return nums[l] === target ? l : -1;
}
// @lc code=end
