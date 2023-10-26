/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
//  k神题解：https://leetcode.cn/problems/rotate-image/solutions/1228078/48-xuan-zhuan-tu-xiang-fu-zhu-ju-zhen-yu-jobi/
// m(i, j) 旋转后变为（j, n-1-i）
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  let row = 0;
  let col = 0;
  if (n % 2) {
    // 奇数时，每一块为长方形，row比col小1，最中间的数字不用交换
    row = (n - 1) / 2;
    col = (n + 1) / 2;
  } else {
    row = n / 2;
    col = n / 2;
  }
  /* 
  [i][j]      =>   [j][n - 1 - i]
   👆🏻                👇🏻
  [n-1-j][i]  <=   [n-1-i][n-1-j]
  */

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
}
// @lc code=end
