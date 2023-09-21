/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

/* 
思路：动态规划，dp[i] = max(dp[i-1], dp[i-2]+current)
 */

// @lc code=start
function rob(nums: number[]): number {
  const fn1 = () => {
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
  };
  // 空间优化版
  const fn2 = () => {
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
  };
  return fn2();
}
// @lc code=end
