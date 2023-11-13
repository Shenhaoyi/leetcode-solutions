/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // dp
  // 对比 122，差别就是卖出第二天不能交易，需要用到 i-2，所以第二天也要初始化
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
    // 第二天
    if (i === 1) {
      dp[1][1] = Math.max(
        -prices[i], // 第二天买入
        dp[i - 1][1], // 第一天买入
      );
      dp[1][0] = Math.max(
        dp[i - 1][0], // 延续 i - 1 的未持有
        dp[i - 1][1] + prices[i], // i - 1 持有，i 卖出
      );
      continue;
    }
    dp[i][1] = Math.max(
      dp[i - 2][0] - prices[i], // 当天买入（即持有），必须前一天开始就没有持有
      dp[i - 1][1], // 之前就持有
    );
    dp[i][0] = Math.max(
      dp[i - 1][0], // 延续 i - 1 的未持有
      dp[i - 1][1] + prices[i], // i - 1 持有，i 卖出
    );
  }
  return dp[prices.length - 1][0]; // 最后一天必须未持有
}
// @lc code=end
