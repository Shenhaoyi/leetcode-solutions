/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/* 
  思路-沉岛：2层循环遍历每个点，遇到一个岛屿就去遍历这个岛的所有内容，并且全部变成2，避免重复。
  注意边界的情况
*/
function maxAreaOfIsland(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;
  let result = 0;
  // 使用 dfs 遍历岛屿。
  // 遇到一个为1的点，就开始找到它周围为1的点，全部置为2，也就是让这个岛在后续的遍历中，不再重复遍历。
  const area = (i: number, j: number): number => {
    // 遇到边沿
    if (i < 0 || i > row - 1 || j < 0 || j > col - 1) {
      return 0;
    }
    if (grid[i][j] !== 1) return 0;
    else {
      grid[i][j] = 2; // 剪枝
      // 上下左右探索
      return 1 + area(i - 1, j) + area(i, j - 1) + area(i + 1, j) + area(i, j + 1);
    }
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        const currentArea = area(i, j);
        result = Math.max(result, currentArea);
      }
    }
  }
  return result;
}
// @lc code=end
