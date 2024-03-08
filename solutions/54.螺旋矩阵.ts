/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  // 向右向下，向左向上，之后都是矩形，但是宽高-1
  const { length: m } = matrix;
  const n = matrix[0].length;
  const result: number[] = [];
  const heightRange = [0, m - 1];
  const widthRange = [0, n - 1];
  const goRightDown = () => {
    // 遍历结束判断
    if (heightRange[0] > heightRange[1] || widthRange[0] > widthRange[1]) {
      return;
    }
    let i = heightRange[0];
    let j = widthRange[0];
    while (j <= widthRange[1]) {
      result.push(matrix[i][j]);
      j++;
    }
    j--; // 多加了 1 次 1，要减回去
    i++; // 要从下一行开始了
    while (i <= heightRange[1]) {
      result.push(matrix[i][j]);
      i++;
    }
    heightRange[0]++;
    widthRange[1]--;
    goLeftUp();
  };
  const goLeftUp = () => {
    if (heightRange[0] > heightRange[1] || widthRange[0] > widthRange[1]) {
      return;
    }
    let i = heightRange[1];
    let j = widthRange[1];
    while (j >= widthRange[0]) {
      result.push(matrix[i][j]);
      j--;
    }
    j++;
    i--;
    while (i >= heightRange[0]) {
      result.push(matrix[i][j]);
      i--;
    }
    heightRange[1]--;
    widthRange[0]++;
    goRightDown();
  };
  goRightDown();
  return result;
}
// @lc code=end
