/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  // 2、动态规划
  // const { length } = nums;
  // const dp = new Array(length);
  // dp[0] = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   const current = nums[i];
  //   dp[i] = current === 1 ? dp[i - 1] + 1 : 0;
  // }
  // return Math.max(...dp);
  // =========================
  // 空间优化版
  let dp = nums[0];
  let result = dp;
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    dp = current === 1 ? dp + 1 : 0;
    result = Math.max(dp, result);
  }
  return result;
}
// @lc code=end

function findMaxConsecutiveOnes1(nums: number[]): number {
  // 1、单指针
  const { length } = nums;
  let result = 0;
  let r = 0;
  let count = 0;
  while (r < length) {
    if (nums[r] === 1) {
      count++;
      r++;
    } else {
      result = Math.max(result, count);
      count = 0;
      r++;
    }
    // 最后一次需要比较下
    if (r >= length) {
      result = Math.max(result, count);
    }
  }
  return result;
}
