/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  const { length } = height;
  let result = 0;
  const prevMaxHeightList = new Array(length).fill(0);
  const nextMaxHeightList = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    const current = height[i];
    if (i === 0) {
      prevMaxHeightList[i] = current;
      continue;
    }
    prevMaxHeightList[i] = Math.max(prevMaxHeightList[i - 1], current);
  }
  for (let i = length - 1; i >= 0; i--) {
    const current = height[i];
    if (i === length - 1) {
      nextMaxHeightList[i] = current;
      continue;
    }

    nextMaxHeightList[i] = Math.max(nextMaxHeightList[i + 1], current);
  }

  // 最两端的两个柱子没法容纳水，因此不循环
  for (let i = 1; i < length - 1; i++) {
    const current = height[i];
    const h = Math.min(prevMaxHeightList[i - 1], nextMaxHeightList[i + 1]);
    if (h > current) {
      //当前柱子如果是最高柱子的话，无法容纳水！
      result += h - current;
    }
  }
  return result;
}
// @lc code=end
