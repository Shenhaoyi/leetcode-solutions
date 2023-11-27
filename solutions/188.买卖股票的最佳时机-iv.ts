/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
// 最多持有 1 只，最多交易 k 次
// @ts-ignore
function maxProfit(k: number, prices: number[]): number {
  // dp-空间优化版
  // 对比 122，限制了最多交易的次数为 k
  const { length } = prices;
  if (length < 2) return 0;
  // 优化一下 k
  k = Math.min(k, Math.floor(length / 2)); // length 最多交易Math.floor(length / 2) 次
  // (天、最多已经交易的次数、是否持有), 0不持有，1 持有
  const dp = Array.from({ length: k + 1 }, () => new Array<number>(2));
  for (let i = 0; i < length; i++) {
    for (let j = 0; j <= k; j++) {
      if (j === 0) {
        dp[0][1] = -Infinity; // 不可能的情况
        dp[0][0] = 0;
        continue;
      }
      if (i === 0) {
        dp[j][1] = -prices[0]; // 开始就持有，说明开始就买了
        dp[j][0] = 0;
        continue;
      }
      const temp = dp[j][1];
      dp[j][1] = Math.max(
        dp[j - 1][0] - prices[i], // 当天买入（即持有），买入时 k 加 1
        dp[j][1], // 之前就持有
      );
      dp[j][0] = Math.max(
        dp[j][0], // 延续 i - 1 的未持有
        temp + prices[i], // i - 1 持有，i 卖出
      );
    }
  }
  return dp[k][0]; // 最后一天必须未持有
}
// @lc code=end

// @ts-ignore
function maxProfit2(k: number, prices: number[]): number {
  // dp
  // 对比 122，限制了最多交易的次数为 k，所以要对 k 进行遍历。
  const { length } = prices;
  if (length < 2) return 0;
  // 优化一下 k
  k = Math.min(k, Math.floor(length / 2)); // length 最多交易Math.floor(length / 2) 次
  // (天、最多已经交易的次数、是否持有), 0不持有，1 持有
  const dp = Array.from({ length }, () => Array.from({ length: k + 1 }, () => new Array<number>(2)));
  for (let i = 0; i < length; i++) {
    for (let j = 0; j <= k; j++) {
      if (j === 0) {
        dp[i][0][1] = -Infinity; // 不可能的情况
        dp[i][0][0] = 0;
        continue;
      }
      if (i === 0) {
        dp[0][j][1] = -prices[0]; // 开始就持有，说明开始就买了
        dp[0][j][0] = 0;
        continue;
      }
      dp[i][j][1] = Math.max(
        dp[i - 1][j - 1][0] - prices[i], // 当天买入（即持有），买入时 k 加 1
        dp[i - 1][j][1], // 之前就持有
      );
      dp[i][j][0] = Math.max(
        dp[i - 1][j][0], // 延续 i - 1 的未持有
        dp[i - 1][j][1] + prices[i], // i - 1 持有，i 卖出
      );
    }
  }
  return dp[length - 1][k][0]; // 最后一天必须未持有
}
