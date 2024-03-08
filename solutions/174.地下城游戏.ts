/*
 * @lc app=leetcode.cn id=174 lang=typescript
 *
 * [174] 地下城游戏
 */

// @lc code=start
function calculateMinimumHP(dungeon: number[][]): number {
  /*
    思路1：把每一条路径都想像成股票经历的涨跌，如果最后一天还没有归零，那么第一天开盘股票最低价格（整数）
    解法：dfs, 每个单元格需要记录 2 个状态：当前路径和，以及路径中出现的最小和
  */
  /*
    思路2：倒序dp，从(i,j)开始到 (m-1,n-1)最少需要多少血
    ps：解决后效性问题，一般用倒推方式即可解决
    参考：https://v.douyin.com/iN7hb5Ch/
  */

  const m = dungeon.length,
    n = dungeon[0].length;
  // 每一格都是大于 0 的
  const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  // 最后一行，一列是用来防止边界问题的，因为会被用来求最小值，所以这只为 Infinity 不会影响计算结果
  for (let i = 0; i < m + 1; i++) {
    dp[i][n] = Infinity;
  }
  for (let j = 0; j < n + 1; j++) {
    dp[m][j] = Infinity;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const current = dungeon[i][j];
      if (i === m - 1 && j === n - 1) {
        // 【注意】：最右下的一次需要手动初始化
        dp[i][j] = current >= 0 ? 1 : -current + 1;
        continue;
      }
      const minCost = Math.min(dp[i][j + 1], dp[i + 1][j]);
      if (current > 0) {
        if (current >= minCost) {
          dp[i][j] = 1; // 完全足够覆盖，则初始只要还有生命值就行
        } else {
          dp[i][j] = minCost - current;
        }
      } else {
        dp[i][j] = minCost - current;
      }
    }
  }
  return dp[0][0];
}
// @lc code=end
