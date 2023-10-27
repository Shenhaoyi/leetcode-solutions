/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
/* 
  k神题解：https://leetcode.cn/problems/3sum/solutions/11525/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/
*/
function threeSum(nums: number[]): number[][] {
  // 排序，小中大的顺序
  nums.sort((a, b) => a - b);
  let result: number[][] = [];
  // 一遍循环 + 双指针, 注意同一个指针不能去相同的数字，否则会有重合的组合
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 防止重复
    const value1 = nums[i];
    if (value1 > 0) break; // 三个数都超过0则不可能和为0，注意，可以都是0
    let left = i + 1;
    let right = length - 1;
    while (left < right && right < length) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // 左右指针同时向内移动
        while (left < right && nums[right - 1] === nums[right]) right--;
        right--;
        while (left < right && nums[left + 1] === nums[i]) left++;
        left++;
      } else if (sum > 0) {
        // 大于，则，右指针移动到左边的数
        while (left < right && nums[right - 1] === nums[right]) right--;
        right--;
      } else {
        // 小于，则左指针移动到右边的数
        while (left < right && nums[left + 1] === nums[i]) left++;
        left++;
      }
    }
  }
  return result;
}
// @lc code=end
