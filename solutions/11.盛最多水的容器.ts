/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  /*
    贪心算法-最大容量问题
  */
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(currentArea, result);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return result;
}
// @lc code=end
