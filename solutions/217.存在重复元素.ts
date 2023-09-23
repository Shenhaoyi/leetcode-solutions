/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  // 1.哈希表
  // const map = new Map<number, number>();
  // let isDuplicated = false;
  // for (let i = 0; i < nums.length; i++) {
  //   const curr = nums[i];
  //   if (map.has(curr)) {
  //     isDuplicated = true;
  //     break;
  //   } else {
  //     map.set(curr, 1);
  //   }
  // }
  // return isDuplicated;
  // 2.使用set
  return new Set(nums).size !== nums.length;
}
// @lc code=end
