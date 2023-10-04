/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current;
    if (map.has(diff)) {
      result = [i, map.get(diff)];
      break;
    } else {
      map.set(current, i);
    }
  }
  return result;
}
// @lc code=end
