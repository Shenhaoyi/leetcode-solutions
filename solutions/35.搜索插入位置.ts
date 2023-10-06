/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // 1、双闭区间法
  // let result = -1;
  // if (!nums.length) return 0;
  // let l = 0;
  // let r = nums.length - 1;
  // // 不存在的话，最后第二次循环时l+1=r，最后一次循环时l = r，退出时r+1=l，r < target < l
  // while (l <= r) {
  //   const m = Math.floor(l + (r - l) / 2);
  //   if (nums[m] > target) r = m - 1;
  //   else if (nums[m] < target) l = m + 1;
  //   else {
  //     result = m;
  //     break;
  //   }
  // }
  // return result === -1 ? l : result;
  // 2、背诵法
  const { length } = nums;
  if (target > nums[length - 1]) return length;
  let l = 0;
  let r = length - 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (nums[m] < target) l = m + 1;
    else r = m;
  }
  return l;
}
// @lc code=end
