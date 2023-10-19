/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
// 行内使用二分查找
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0]?.length || 0;
  let result = false;
  for (let i = 0; i < m; i++) {
    const currentLine = matrix[i];
    // if (currentLine[0] > target) break; // 当前行首位判断一下，不判断也行
    // if (currentLine[n - 1] < target) continue;
    let l = 0;
    let r = n - 1;
    while (l < r) {
      const m = Math.floor(l + (r - l) / 2);
      if (currentLine[m] < target) l = m + 1;
      else r = m;
    }
    if (currentLine[l] === target) {
      result = true;
      break;
    }
  }
  return result;
}
// @lc code=end
