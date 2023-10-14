/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  const dp = [0, 1, 1];
  if (n <= 2) return dp[n];
  for (let i = 3; i <= n; i++) {
    dp.push(dp[1] + dp[2]);
    dp.shift();
  }
  return dp[2];
}
// @lc code=end
