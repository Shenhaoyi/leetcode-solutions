/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  // dp(空间可以在优化，只留一行就行)
  // 对比 122，只是多了 fee，卖出时，减去 fee 就行
  const { length } = prices;
  if (length < 2) return 0;
  // 0不持有，1 持有
  const dp = Array.from({ length }, () => new Array<number>());
  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      dp[0][1] = -prices[0]; // 开始就持有，说明开始就买了
      dp[0][0] = 0;
      continue;
    }
    dp[i][1] = Math.max(
      dp[i - 1][0] - prices[i], // 当天买入（即持有）
      dp[i - 1][1], // 之前就持有
    );
    dp[i][0] = Math.max(
      dp[i - 1][0], // 延续 i - 1 的未持有
      dp[i - 1][1] + prices[i] - fee, // i - 1 持有，i 卖出
    );
  }
  return dp[prices.length - 1][0]; // 最后一天必须未持有
}
// @lc code=end
