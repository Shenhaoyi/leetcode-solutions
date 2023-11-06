/*
 * @lc app=leetcode.cn id=463 lang=typescript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/* 
  思路-dfs：遇到边界/水就是边，+1
*/
function islandPerimeter(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        // 只有一个岛屿，直接返回就行
        return help(i, j);
      }
    }
  }
  // 周长即遍历的过程中遇到边界或者水是次数
  function help(i: number, j: number): number {
    // 遇到边界
    if (i < 0 || j < 0 || i > row - 1 || j > col - 1) {
      return 1;
    }
    const current = grid[i][j];
    if (current === 0) return 1; // 遇到水
    else if (current === 1) {
      grid[i][j] = 2;
      return help(i - 1, j) + help(i, j - 1) + help(i + 1, j) + help(i, j + 1);
    } else return 0; // 2的情况
  }
  return 0; // 兜底
}
// @lc code=end
