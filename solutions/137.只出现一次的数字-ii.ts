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
        所以判断 32 就行
  */
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // i 为二进制数的位
    // 每一轮取出各个数字的第 i 位
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      sum += (nums[j] >> i) & 1; // 取第i+1位的数(末位为第一位1)
    }
    result += sum % 3 << i; // 将该位上的值加到结果中，只有出现一次或者2次的数字才会加进去，本题就是出现一次的数加进去
  }
  return result;
}
// @lc code=end
