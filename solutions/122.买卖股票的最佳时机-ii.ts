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
  const { length } = prices;
  if (length < 2) return 0;
  const dp = [0, -prices[0]]; // 初始化第一天：开始就持有，说明开始就买了
  for (let i = 1; i < length; i++) {
    const current = prices[i];
    const tempDp1 = dp[1]; // dp0 依赖 dp1，需要缓存下
    dp[0] = Math.max(dp[0], tempDp1 + current);
    dp[1] = Math.max(dp[1], dp[0] - current); // dp[0]将之前的收益算在内
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
  for (let i = 0; i < length; i++) {
    const current = prices[i];
    if (i === 0) {
      dp[i][1] = -current; // 开始就持有，说明开始就买了
      dp[i][0] = 0;
      continue;
    }
    dp[i][0] = Math.max(
      dp[i - 1][0], // 延续 i - 1 的未持有
      dp[i - 1][1] + current, // i - 1 持有，i 卖出
    );
    dp[i][1] = Math.max(
      dp[i - 1][1], // 之前就持有
      dp[i - 1][0] - current, // 当天买入（即持有）
    );
  }
  return dp[length - 1][0]; // 最后一天必须未持有
}
