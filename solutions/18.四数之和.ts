/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  // 3数之和的基础上再加一层循环，注意这里target可能小于0，所以不能凭借前两个指针的数字就进行break!
  nums.sort((a, b) => a - b);
  let result: number[][] = [];
  const { length } = nums;
  // -3，因为右边至少还需要 3 个数字
  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const first = nums[i];
    // -2，因为右边至少还需要 2 个数字
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      const second = nums[j];
      let left = j + 1;
      let right = length - 1;
      while (left < right && right < length) {
        const sum = first + second + nums[left] + nums[right];
        if (sum === target) {
          result.push([first, second, nums[left], nums[right]]);
          while (left < right && nums[right - 1] === nums[right]) right--;
          right--;
          while (left < right && nums[left + 1] === nums[left]) left++;
          left++;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return result;
}
// @lc code=end
