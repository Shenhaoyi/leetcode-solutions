/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  /*
    解法：位运算
    思路
      按位来看，只要该位上出现的1的个数不是3，那么目标值在该位上就为1
      因为题目给定数字的范围在 -2^31 <= nums[i] <= 2^31 - 1
        31位二进制，但是还需要有一位表示符号
        所以判断 32 就行
  */
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      const current = nums[j];
      sum += (current >>> i) & 1;
    }
    result += sum % 3 << i;
  }
  return result;
}
// @lc code=end

export default {};
