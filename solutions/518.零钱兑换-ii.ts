/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
// 可重复
function change(amount: number, coins: number[]): number {
  // 1、回溯也行，不过回超时，39题的代码可以直接拿来用
  // return combinationSum(coins, amount).length
  // 2、dp
  const m = coins.length;
  const n = amount;
  const dp = new Array(n + 1).fill(0); // 第一行表示没有物品能放，初始化为0
  dp[0] = 1; // 第一列为表示空间为0了，迭代到dp[0]，说明正好前面的空间都被用完了，属于1种组合
  for (let i = 1; i < m + 1; i++) {
    const current = coins[i - 1];
    for (let j = 1; j < n + 1; j++) {
      if (j >= current) {
        dp[j] =
          dp[j] + // 当前不放
          dp[j - current]; // 当前放，往左边试探，看看能不能再放
      } else {
        // 当前放不下，回退到上一行
        dp[j] = dp[j];
      }
    }
  }
  return dp[n];
}
// @lc code=end
