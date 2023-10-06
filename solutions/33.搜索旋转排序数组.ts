/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // 思路，先找最小值所在边界，再判断target在左边还是右边，按照递增数组查找即可
  const { length } = nums;
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
  // minValueIndex = l = r;
  if (target < nums[0]) r = length - 1; // l已经是min所在的位置了
  else l = 0;

  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (nums[m] < target) l = m + 1;
    else r = m;
  }
  return nums[l] === target ? l : -1;
}
// @lc code=end
