/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  // 1、常规版
  // const m = grid.length;
  // const n = grid[0].length;
  // const dp = new Array(m).fill(undefined).map(() => new Array(n).fill(0));
  // // 初始状态
  // // 第一行
  // for (let j = 0; j < n; j++) {
  //   if (j === 0) {
  //     dp[0][j] = grid[0][j];
  //   } else {
  //     dp[0][j] = dp[0][j - 1] + grid[0][j];
  //   }
  // }
  // // 第一列
  // for (let i = 1; i < m; i++) {
  //   dp[i][0] = dp[i - 1][0] + grid[i][0];
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
  //   }
  // }
  // return dp[m - 1][n - 1];
  // 2、for循环写一起，理论上时间应该没有优化，但没有dp表，只能写一起；空间优化
  const m = grid.length;
  const n = grid[0].length;
  const dp_line = new Array(n).fill(0); // 只记录一行（一半在当前行左边，一半在上一行右边）
  // 初始化状态，第一行
  for (let j = 0; j < n; j++) {
    if (j === 0) {
      dp_line[j] = grid[0][j];
    } else {
      dp_line[j] = dp_line[j - 1] + grid[0][j];
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp_line[j] = dp_line[j] + grid[i][j];
      } else {
        dp_line[j] = Math.min(dp_line[j], dp_line[j - 1]) + grid[i][j];
      }
    }
  }
  return dp_line[n - 1];
}
// @lc code=end
