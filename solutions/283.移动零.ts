/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // 解法1：双重循环
  // 0时，找到后面第一个非0的进行调换就行
  // for (let i = 0; i < nums.length; i++) {
  //   const current = nums[i];
  //   if (current === 0) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       const childCurrent = nums[j];
  //       if (childCurrent !== 0) {
  //         nums[i] = childCurrent;
  //         nums[j] = 0;
  //         break;
  //       }
  //     }
  //   }
  // }
  /*
    解法2：快慢指针
      确保两个指针中间的数字都是0;
      快指针遇到 0
        则慢指针不++，慢指针最终一定指向第一个遇到的0
      快指针遇到非 0
        如果快慢指针位置不同，则慢指针一定指向 0，交换，慢指针++，慢指针又指向第一个 0 了
  */
  let slowPointer = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current !== 0) {
      if (i !== slowPointer) {
        [nums[i], nums[slowPointer]] = [nums[slowPointer], nums[i]];
      }
      slowPointer++;
    }
  }
}
// @lc code=end

// 快慢指针的 while 写法
function moveZeroes2(nums: number[]): void {
  let slow = 0;
  let fast = 0;
  const { length } = nums;
  while (fast < length) {
    const current = nums[fast];
    if (current !== 0) {
      if (fast !== slow) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      }
      slow++;
    }
    fast++;
  }
}
