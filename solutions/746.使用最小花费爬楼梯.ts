/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  // 1、完整dp表
  // const { length } = cost;
  // const dp = new Array(length).fill(0);
  // dp[0] = cost[0];
  // dp[1] = cost[1];
  // for (let i = 2; i < length; i++) {
  //   dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  // }
  // return Math.min(dp[length - 1], dp[length - 2]); // 楼顶在下标n

  // 2、空间优化版
  const { length } = cost;
  const dp = [cost[0], cost[1]]; // dp记录的事从i出发最少要多少
  for (let i = 2; i < length; i++) {
    dp.push(Math.min(dp[0], dp[1]) + cost[i]);
    dp.shift();
  }
  return Math.min(dp[0], dp[1]); // 楼顶在下标n
}
// @lc code=end
