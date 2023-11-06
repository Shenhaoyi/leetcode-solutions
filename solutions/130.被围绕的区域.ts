/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
/* 
  边界以外统统视为0即可，也就是边界上的0肯定不是
  思路：把不与边界上的 'O' 相连的 'O' 填充为 'X'即可
*/
function solve(board: string[][]): void {
  // 边界零开始 dfs，遇到 0 就沉没
  const row = board.length;
  const col = board[0].length;
  // 给边界上的 O 相连的 O 做标记
  const dfs = (i: number, j: number) => {
    if (i < 0 || i > row - 1 || j < 0 || j > col - 1) return;
    const current = board[i][j];
    if (current === 'O') {
      board[i][j] = 'A';
      dfs(i, j + 1);
      dfs(i, j - 1);
      dfs(i + 1, j);
      dfs(i - 1, j);
    }
  };
  // 只遍历边界，找到边界联通的0
  for (let i = 0; i < row; i++) {
    dfs(i, 0);
    dfs(i, col - 1);
  }
  for (let j = 0; j < col; j++) {
    dfs(0, j);
    dfs(row - 1, j);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const current = board[i][j];
      if (current === 'O') {
        board[i][j] = 'X';
      } else if (current === 'A') {
        board[i][j] = 'O'; // 还原
      }
    }
  }
}
// @lc code=end
