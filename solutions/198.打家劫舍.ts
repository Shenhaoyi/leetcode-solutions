/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  const { length } = nums;
  const dp = new Array(length + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i < length + 1; i++) {
    const current = nums[i - 1];
    dp[i] = Math.max(
      dp[i - 1], // 当前不抢，i - 1 抢不抢不知道
      dp[i - 2] + current, // 当前抢
    );
  }
  return dp[length];
}
// @lc code=end

/* 
  按照控制理论的动态规划算法做
  思路：动态规划，dp[i] = max(dp[i-1], dp[i-2]+current)
*/
function rob2(nums: number[]): number {
  const { length } = nums;
  if (length === 0) return 0;
  const costToGo: number[][] = []; // 剩余代价
  // 倒推，从i开始到n最多能抢多少
  for (let i = length - 1; i > -1; i--) {
    costToGo[i] = [];
    if (i === length - 1) {
      costToGo[i][0] = 0;
      costToGo[i][1] = nums[i];
    } else {
      costToGo[i][0] = Math.max(...costToGo[i + 1]);
      costToGo[i][1] = costToGo[i + 1][0] + nums[i]; // 当前抢了，下一步就不能抢
    }
  }
  return Math.max(...costToGo[0]);
}

function rob3(nums: number[]): number {
  // 2的空间优化版
  const { length } = nums;
  if (length === 0) return 0;
  const costToGo: number[] = []; // 剩余代价
  // 倒推，从i开始到n最多能抢多少
  for (let i = length - 1; i > -1; i--) {
    const [notRob, rob] = costToGo;
    if (i === length - 1) {
      costToGo[0] = 0;
      costToGo[1] = nums[i];
    } else {
      costToGo[0] = Math.max(notRob, rob);
      costToGo[1] = notRob + nums[i]; // 当前抢了，下一步就不能抢
    }
  }
  return Math.max(...costToGo);
}
