/*
 * @lc app=leetcode.cn id=378 lang=typescript
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
function kthSmallest(matrix: number[][], k: number): number {
  // 归并排序,参考收藏，思路是候选人，左边一列，取最小的一个，取完从右边压入一个进入候选人名单
  // 如果能将后选人用小顶堆（有优先队列）
  const m = matrix.length;
  const n = matrix[0].length;
  const temp = new Array(m).fill(0); // 用来保存每一行最新的起始下标
  const MAX = matrix[m - 1][n - 1]; // 矩阵中最大的数
  let kMin = MAX;
  for (let i = 0; i < k; i++) {
    let min = MAX;
    let targetIndex = m - 1; // 当前的target所在行下标
    // for循环整列，找出最小的
    for (let j = 0; j < m; j++) {
      if (temp[j] < n /* 保证下标不越界 */) {
        if (matrix[j][temp[j]] < min) {
          min = matrix[j][temp[j]];
          targetIndex = j;
        }
      }
    }
    temp[targetIndex]++;
    if (i === k - 1) kMin = min;
  }
  return kMin;
}
// @lc code=end
