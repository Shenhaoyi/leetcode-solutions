/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((curr, prev) => prev + curr, 0);
  // 1. 回溯，子集，找到子集和等于sum/2，大于就剪枝。经过剪枝时间复杂度略小于2^n
  // 2. 转化为01背包问题，数组的元素同时是weight和value，最大总量为sum/2，如果dp[sum/2] === sum/2，说明存在
  const { length: n } = nums;
  const m = sum / 2;
  if (m !== Math.floor(sum / 2)) return false;
  const dp = new Array(m + 1).fill(0); // 空间优化，只用一行
  for (let j = 1; j < m + 1; j++) {
    const current = nums[0]; // 既是weight也是value
    if (j >= current) {
      dp[j] = current;
    } else {
      dp[j] = 0;
    }
  }
  for (let i = 2; i < n; i++) {
    // 倒序
    for (let j = m; j >= 1; j--) {
      const current = nums[i - 1];
      if (j - current >= 0) {
        dp[j] = Math.max(dp[j], dp[j - current] + current);
      } else {
        dp[j] = dp[j];
      }
    }
  }
  return dp[m] === m;
}
// @lc code=end
