/*
 * @lc app=leetcode.cn id=1277 lang=typescript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 */

// @lc code=start
function countSquares(matrix: number[][]): number {
  // 与 221 思路基本一样。
  // 这里是数字，那边是字符串；这里是正方形个数，那边是最大面积
  // 思路：计算每个节点为正方形右下角的正方形数量，进行累加
  const { length: row } = matrix;
  if (row < 1) return 0;
  const col = matrix[0].length;
  // 记录以当前节点(i, j)为右下角的正方形数量。（边长多长，个数就有几个）
  const dp = Array.from({ length: row }, () => new Array<number>(col));
  let result = 0; // 返回的是面积
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0) {
        // 初始化
        dp[i][j] = matrix[i][j];
      } else {
        if (matrix[i][j] === 1) {
          // 边长，也是个数
          dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
        } else {
          dp[i][j] = 0;
        }
      }
      result += dp[i][j];
    }
  }
  return result;
}
// @lc code=end
