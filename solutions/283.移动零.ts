/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // 解法1：双重循环
  // 0时，找到后面第一个非0的进行调换就行
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current === 0) {
      for (let j = i + 1; j < nums.length; j++) {
        const childCurrent = nums[j];
        if (childCurrent !== 0) {
          nums[i] = childCurrent;
          nums[j] = 0;
          break;
        }
      }
    }
  }
}
// @lc code=end
