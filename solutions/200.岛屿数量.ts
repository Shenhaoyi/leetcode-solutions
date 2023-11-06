/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/* 
  思路与【695.岛屿的面积】一样
*/
function numIslands(grid: string[][]): number {
  let row = grid.length;
  let col = grid[0].length;
  let result = 0;
  // 沉岛，每遇到一个岛就让它全部为2
  const dfs = (i: number, j: number) => {
    if (i < 0 || i > row - 1 || j < 0 || j > col - 1) {
      return;
    }
    if (grid[i][j] === '1') {
      grid[i][j] = '2';
      dfs(i - 1, j);
      dfs(i, j - 1);
      dfs(i + 1, j);
      dfs(i, j + 1);
    }
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        // 沉没
        dfs(i, j);
        result += 1;
      }
    }
  }
  return result;
}
// @lc code=end
