/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
  // 动态规划
  // 乘2就是左移1位，末位补0
  // 乘2加1就是左移1位，末位补1，所以多1个1
  let dp = new Array(n + 1);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i / 2];
    }
  }
  return dp;
}
// @lc code=end
