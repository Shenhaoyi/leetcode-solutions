/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
/* 
  行列下表都是 0 ~ n-1
  col-row范围 1-n ~ n-1，需要调整为 0 ~ 2*n-2
  col+row范围 0 ~ 2*n-2
*/

function backTrack5(
  state: string[][],
  n: number,
  rowIndex: number, // 当前处理的行
  cols: boolean[], // 标记列上是否已经有皇后
  mainDiag: boolean[], // 标记主对角方向上是否已经有皇后
  minorDiag: boolean[], // 标记次对角方向上是否已经有皇后
  result: string[][],
) {
  if (rowIndex === n) {
    // 注意走到n才是停止，因为n-1的时候还没走完，还要选
    result.push(state.map((line) => line.join('')));
  } else if (rowIndex < n) {
    for (let i = 0; i < n; i++) {
      // 剪枝：当前列、主对角方向、付对角方向都没有元素
      if (!cols[i] && !mainDiag[n - 1 + rowIndex - i] && !minorDiag[rowIndex + i]) {
        // 试探
        state[rowIndex][i] = 'Q';
        cols[i] = true;
        mainDiag[n - 1 + rowIndex - i] = true;
        minorDiag[rowIndex + i] = true;
        backTrack5(state, n, rowIndex + 1, cols, mainDiag, minorDiag, result);
        //回退
        cols[i] = false;
        mainDiag[n - 1 + rowIndex - i] = false;
        minorDiag[rowIndex + i] = false;
        state[rowIndex][i] = '.';
      }
    }
  }
}
function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const state = new Array(n).fill(undefined).map(() => new Array(n).fill('.'));
  const cols = new Array(n).fill(false); // 标识列上是否已经有皇后
  const mainDiag = new Array(2 * n - 1).fill(false);
  const minorDiag = new Array(2 * n - 1).fill(false);
  backTrack5(state, n, 0, cols, mainDiag, minorDiag, result);
  return result;
}
// @lc code=end
