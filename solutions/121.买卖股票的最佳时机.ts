/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
// 注意：只买入 1 次
// @ts-ignore
function maxProfit(prices: number[]): number {
  const { length } = prices;
  if (length < 2) return 0;
  const dp = [0, -prices[0]]; // 创建数组的时候就可以初始化第一天的数据了
  for (let i = 1; i < length; i++) {
    const current = prices[i];
    dp[0] = Math.max(dp[0], dp[1] + current);
    dp[1] = Math.max(dp[1], -current);
  }
  return dp[0];
}
// @lc code=end

// @ts-ignore
function maxProfit2(prices: number[]): number {
  // dp
  const { length } = prices;
  if (length < 2) return 0;
  const dp = Array.from({ length }, () => new Array<number>(2)); //一个存状态dp[i][0/1]  第二个状态表示是否持有，1表示持有
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
    ); // 这个迭代，比较出 0、之前已经完成的 1 次交易和当前完成 1 次交易之间的最大值
    dp[i][1] = Math.max(
      dp[i - 1][1], // 之前就持有
      -current, // 当天买入（即持有）
    ); // 这里可以迭代出到 i 为止price 最小的情况
  }
  return dp[length - 1][0]; // 最后一天必须未持有
}

function maxProfit3(prices: number[]): number {
  // 非 dp 的实现方法：一次遍历
  // 遍历的过程中，记录之前出现的最低点, 当前卖出的话一定是希望之前是在最低点买入的
  let minPrice = prices[0];
  let result = 0;
  for (let i = 1; i < length; i++) {
    result = Math.max(result, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return result;
}
