/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 1、双重循环，超时
  // 2、双指针，因为有负数，根本不知道指针移动多少
  // 3、分治：left,right，要么在左边，要么在右边，要么左右连通，从mid向左右遍历找最大的区间，递归分治下去，O(NlogN)
  // 4、dp
  // dp[i]表示包含i并且到i为止的最大连续和，只要之前的和为负，就抛弃前面的。
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i]; // 包含i的最大和只与dp[i-1]有关, dp[i-1]为负就舍弃
  }
  return Math.max(...dp);
}
// @lc code=end
