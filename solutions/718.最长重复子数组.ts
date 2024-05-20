/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  // 1、暴力遍历，>N^2，会超时
  // 2、dp
  const { length: length1 } = nums1;
  const { length: length2 } = nums2;
  let result = 0; // 计算中比较出来
  // dp[i][j] 表示以 i 和 j 为结尾的子数组重复长度
  const dp = Array.from({ length: length1 + 1 }, () => Array.from({ length: length2 + 1 }, () => 0));
  // 初始化，第 0 行和第 0 列，没有元素，肯定没有重复
  for (let i = 1; i < length1 + 1; i++) {
    const current1 = nums1[i - 1];
    for (let j = 1; j < length2 + 1; j++) {
      const current2 = nums2[j - 1];
      if (current1 === current2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        result = Math.max(result, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return result;
}
// @lc code=end
