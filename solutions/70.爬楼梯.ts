/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const dp = [0, 1, 2];
  if (n <= 2) return dp[n];
  for (let i = 3; i <= n; i++) {
    const current = dp[1] + dp[2];
    dp.shift();
    dp.push(current);
  }
  return dp[2];
}
// @lc code=end
