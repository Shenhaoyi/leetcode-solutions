/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
// 注意：只买入 1 次
// @ts-ignore
function maxProfit(prices: number[]): number {
  // dp 空间优化
  const { length } = prices;
  if (length < 2) return 0;
  const dp: number[] = []; // 下标 0 表示未持有，1 表示持有
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      dp[1] = -prices[0]; // 开始就持有，说明开始就买了
      dp[0] = 0;
      continue;
    }
    dp[0] = Math.max(
      dp[0], // 延续 i - 1 的未持有
      dp[1] + prices[i], // i - 1 持有，i 卖出
    );
    dp[1] = Math.max(
      -prices[i], // 当天买入（即持有）
      dp[1], // 之前就持有
    );
  }
  return dp[0]; // 最后一天必须未持有
}
// @lc code=end

function maxProfit2(prices: number[]): number {
  // dp
  const { length } = prices;
  if (length < 2) return 0;
  const dp: number[][] = []; //一个存状态dp[i][0/1]  第二个状态表示是否持有，1表示持有
  for (let i = 0; i < length; i++) {
    dp[i] = [];
    if (i === 0) {
      dp[0][1] = -prices[0]; // 开始就持有，说明开始就买了
      dp[0][0] = 0;
      continue;
    }
    dp[i][0] = Math.max(
      dp[i - 1][0], // 延续 i - 1 的未持有
      dp[i - 1][1] + prices[i], // i - 1 持有，i 卖出
    );
    dp[i][1] = Math.max(
      -prices[i], // 当天买入（即持有）
      dp[i - 1][1], // 之前就持有
    );
  }
  return dp[length - 1][0]; // 最后一天必须未持有
}

function maxProfit3(prices: number[]): number {
  // 一次遍历，不是动态规划
  // 遍历的过程中，记录之前出现的最低点, 当前卖出的话一定是希望之前是在最低点买入的
  let minPrice = prices[0];
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    result = Math.max(result, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return result;
}
