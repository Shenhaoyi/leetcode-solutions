/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // 1、双指针（滑动窗口）
  /*
  从左到右移动窗口，左指针和右指针都是往右走，如果比s小，右指针右移
  否则判断当前长度是否比之前的长度小，然后左指针右移，说明当前左指针所在位置的元素的最短长度已经判断到了，而且是刚刚大于s的情况
  左指针右移一次可能使得下一个点开始的sum小于也可能大于s，再下一轮循环中判断就行。
  */
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
  /*
    2、二分法：依次计算，从i开始的最短目标数组(会超时，因为有累加的过程，与O(N^2)差不多
    能够使用二分法的原因是，正数的累加和是递增的
  */
  // const { length } = nums;
  // if (length === 0) return 0;
  // let result = Infinity;
  // for (let i = 0; i < length; i++) {
  //   let left = i;
  //   let right = length - 1;
  //   let currentSum = 0;
  //   while (left < right) {
  //     const mid = Math.floor(left + (right - left) / 2);
  //     for (let j = i; j <= mid; j++) {
  //       currentSum += nums[j];
  //     }
  //     if (currentSum < target) left = mid + 1;
  //     else right = mid;
  //     currentSum = 0;
  //   }
  //   // 还得判断下到left的累加和是否大于目标值
  //   for (let j = i; j <= left; j++) {
  //     currentSum += nums[j];
  //   }
  //   if (currentSum >= target) result = Math.min(result, left - i + 1);
  // }
  // return result > nums.length ? 0 : result;
}
// @lc code=end
