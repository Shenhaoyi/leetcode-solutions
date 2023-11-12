/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  // 注意，是字符串
  // 动态规划，当前点作为正方形的右下角
  //
  /* 
    1、当前为 0，则包含当前的最大正方形大小为 0
    2、当前为 1，则上变的高度取决于左上角和上边的正方形的边长，左边取决于左边和左上角的正方形的边长，即
      hight = min(左上角.length, 上边.length) + 1;
      width = min(左边.length, 左上角.length) + 1;
      若要为正方形，则 currentLength = min(height, width)
      状态转移：currentLength = min(左上角.length, 上边.length, 左边.length) + 1
  */
  const { length: row } = matrix;
  if (row < 1) return 0;
  const col = matrix[0].length;
  // 记录边长
  const dp = Array.from({ length: row }, () => new Array<number>(col));
  let result = 0; // 返回的是面积
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0) {
        // 初始化
        dp[i][j] = +matrix[i][j]; // 字符串转数字
      } else {
        if (matrix[i][j] === '1') {
          dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
        } else {
          dp[i][j] = 0;
        }
      }
      result = Math.max(dp[i][j], result);
    }
  }
  return result * result;
}
// @lc code=end
