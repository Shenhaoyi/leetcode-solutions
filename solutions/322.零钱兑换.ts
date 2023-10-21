/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // 转化为完全背包问题
  // weight：面额
  // value：一个硬币1
  // 最大容量：总金额amount
  // 目标是只找到value最小的，且正好达到最大容量
  // 思路是，所有不是正好装满的都为无穷大，这样就能在所有能正好装满的情况中比较出最小的值了。
  const { length: m } = coins;
  const n = amount;
  const MAX = amount + 1;
  const dp = new Array(n + 1).fill(0); // dp[j] 面额j所需最少的硬币
  // 第一列，没有空间，那最小就是0；第一行，从1开始，有空间，但是没有东西能放满，则初始化为一个较大的数字
  for (let j = 1; j < n + 1; j++) {
    dp[j] = MAX;
  }
  const currentValue = 1;
  for (let i = 1; i <= m; i++) {
    const currentWeight = coins[i - 1];
    for (let j = 1; j <= n; j++) {
      if (j - currentWeight >= 0) {
        // 可以重复选择！！
        dp[j] = Math.min(dp[j], dp[j - currentWeight] + currentValue);
      }
      // 可以和上面的合并，因为等于的时候是第0列，已经初始化为0了
      // else if (j - currentWeight === 0) {
      //   // 正好装下1个
      //   dp[j] = currentValue;
      // }
      else {
        // 当前装不下
        dp[j] = dp[j];
      }
    }
  }
  // 等于MAX说明所有的情况都不能正好装下
  return dp[n] === MAX ? -1 : dp[n];
}
// @lc code=end
