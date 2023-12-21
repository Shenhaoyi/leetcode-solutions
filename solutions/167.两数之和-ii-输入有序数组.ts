/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
// @ts-ignore
function twoSum(numbers: number[], target: number): number[] {
  // 双指针
  let left = 0;
  let right = numbers.length - 1;
  let result: number[] = [];
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum == target) {
      result = [left + 1, right + 1];
      break;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return result;
}
// @lc code=end
