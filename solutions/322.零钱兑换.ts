/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // 转化为完全背包问题
  // weight：面额
  // value：一个硬币1
  // 最大容量：总金额amount
  // 目标是只找到value最小的，且正好达到最大容量
  const { length: m } = coins;
  const n = amount;
  const dp = new Array(m + 1).fill(undefined).map(() => new Array(n + 1).fill(0)); // dp[i][j] 面额j所需最少的硬币
  const currentValue = 1;
  for (let i = 1; i <= m; i++) {
    // 第一行初始化
    if (i === 1) {
      for (let j = 1; j <= n; j++) {
        const currentWeight = coins[i - 1];
        if (currentWeight === j) {
          // 正好装下1个
          dp[i][j] = currentValue;
        } else if (j - currentWeight > 0) {
          dp[i][j] = dp[i][j - currentWeight] + currentValue; // 剩余的空间还能放，但是不一定能刚好放下，所以会出现大于amount+1的情况
        } else {
          // 不是正好装下，就代表递归到这里的所有情况都不是正好等于目标面额
          dp[i][j] = amount + 1;
        }
      }
    } else {
      for (let j = 1; j <= n; j++) {
        const currentWeight = coins[i - 1];
        if (j - currentWeight > 0) {
          // 可以重复选择！！
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - currentWeight] + currentValue);
        } else if (j - currentWeight === 0) {
          // 正好装下1个
          dp[i][j] = currentValue;
        } else {
          // 当前装不下
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  }
  // 大于amount+1说明所有的情况都不能正好装下
  return dp[m][n] >= amount + 1 ? -1 : dp[m][n];
}
// @lc code=end
