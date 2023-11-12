/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start

function integerBreak(n: number): number {
  /*
    思路：dp[i-1]之前的拆分都计算好了，那i 的时候再拆除一个数字，依次遍历，拆分出来的数字大小，计算最大值即可
   */
  // 要 0-n 所有拆分的最优值，与零钱兑换有点类似
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    // 遍历再拆出的数字，因为至少要 2个数字，所以至少留下 1
    let currentMax = 0;
    for (let j = 1; j <= i - 1; j++) {
      // 拆除的数字 范围：1 ~ i - 1
      currentMax = Math.max(
        currentMax,
        j * (i - j), // 剩下的数字不拆(存在不够拆的情况！)
        j * dp[i - j], // 剩下的数字拆
      );
    }
    dp[i] = currentMax;
  }
  return dp[n];
}
// @lc code=end
