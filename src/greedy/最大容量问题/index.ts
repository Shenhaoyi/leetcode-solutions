/* 最大容量：贪心 */
export function maxCapacity(ht: number[]): number {
  // 初始化 i, j 分列数组两端
  let i = 0,
    j = ht.length - 1;
  // 初始最大容量为 0
  let res = 0;
  // 循环贪心选择，直至两板相遇
  while (i < j) {
    // 更新最大容量
    const cap: number = Math.min(ht[i], ht[j]) * (j - i);

    res = Math.max(res, cap);
    // 向内移动短板，移动长板必然导致容量变小。
    if (ht[i] < ht[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return res;
}
