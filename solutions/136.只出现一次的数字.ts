/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  // 自己异或自己为0，与0异或为自己
  return nums.reduce((prev, current) => prev ^ current, 0);
}
// @lc code=end
