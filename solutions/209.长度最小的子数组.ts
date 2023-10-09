/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // 1、双指针
  if (nums.length === 0) return 0;
  let result = Infinity;
  let l = 0;
  let r = 0;
  let currentSum = nums[0]; // 左右指针所在区间的元素之和，当前区间是[0, 0]
  while (r < nums.length) {
    if (currentSum >= target) {
      // 比较result与currentLength
      const currentLength = r - l + 1;
      if (currentLength < result) result = currentLength;
      // 移动左指针
      currentSum -= nums[l];
      l++;
    } else {
      r++;
      currentSum += nums[r];
    }
  }
  // 可能不存在，判断一下result与数组长度
  return result > nums.length ? 0 : result;
}
// @lc code=end
