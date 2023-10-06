/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
  const { length } = nums;
  let result = nums[0];
  // 判断没有旋转的情况
  if (nums[0] < nums[length - 1] || length === 1) return result;
  let l = 0;
  let r = length - 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (nums[m] >= nums[0]) {
      l = m + 1; // m在左边段，则区间向右半段逼近
    } else if (nums[m] < nums[0]) {
      r = m; // m在右半段，说明最小值在m或其左边; 当区间在右半段时，r会不断向l逼近
    }
  }
  return nums[l];
}
// @lc code=end
