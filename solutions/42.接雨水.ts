/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  // 2、双指针，空间复杂度优化到 O(1)
  const { length } = height;
  let result = 0;
  let left = 1;
  let right = length - 2;
  let prevMax = height[0]; // 当前格子左边最高的高度
  let nextMax = height[length - 1]; // 当前格子右边最高的高度
  while (left <= right) {
    if (prevMax < nextMax) {
      // 在左边取格子计算
      const current = height[left];
      if (current < prevMax) result += prevMax - current;
      left++;
      prevMax = Math.max(prevMax, current);
    } else {
      // 在右边取格子计算
      const current = height[right];
      if (current < nextMax) result += nextMax - current;
      right--;
      nextMax = Math.max(nextMax, current);
    }
  }
  return result;
}
// @lc code=end

function trap2(height: number[]): number {
  // 1、3次循环，时间和空间复杂度都是 O(N)
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
