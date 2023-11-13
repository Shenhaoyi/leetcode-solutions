/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
// 最多持有 1 只，买卖次数不限制
// @ts-ignore
function maxProfit(prices: number[]): number {
  // dp-空间优化版
  // 对比 121，只有当天卖出时的计算不同（把之前的交易收益算进去）
  const { length } = prices;
  if (length < 2) return 0;
  // 0不持有，1 持有
  const dp = [0, -prices[0]]; // 初始化第一天：开始就持有，说明开始就买了
  for (let i = 1; i < length; i++) {
    // dp0 依赖 dp1，需要缓存下
    const tempDp1 = dp[1];
    dp[1] = Math.max(
      dp[0] - prices[i], // 当天买入（即持有）
      dp[1], // 之前就持有
    );
    dp[0] = Math.max(
      dp[0], // 延续 i - 1 的未持有
      tempDp1 + prices[i], // i - 1 持有，i 卖出
    );
  }
  return dp[0]; // 最后一天必须未持有
}
// @lc code=end
function maxProfit4(prices: number[]): number {
  // dp
  // 对比 121，只有当天卖出时的计算不同（把之前的交易收益算进去）
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
      dp[i - 1][1] + prices[i], // i - 1 持有，i 卖出
    );
  }
  return dp[prices.length - 1][0]; // 最后一天必须未持有
}
