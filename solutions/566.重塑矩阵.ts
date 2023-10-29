/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  // 思路，先平铺，再按行压入
  const row = mat.length;
  const col = mat[0].length;
  if (row * col != r * c) return mat;
  const result = [];
  const queue = mat.reduce((result, item) => {
    return [...result, ...item];
  }, []);
  for (let i = 0; i < r; i++) {
    result.push(queue.slice(i * c, i * c + c));
  }

  return result;
}
// @lc code=end
