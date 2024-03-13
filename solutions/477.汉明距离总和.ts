/*
 * @lc app=leetcode.cn id=477 lang=typescript
 *
 * [477] 汉明距离总和
 */

// @lc code=start
function totalHammingDistance(nums: number[]): number {
  // 每一位上都统计0的个数x和1的个数y，x*y就是该为上的距离，每个零和所有1都是距离
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let j = 0; j < nums.length; j++) {
      let current = nums[j] & 1;
      if (current === 1) oneCount++;
      else zeroCount++;

      nums[j] >>>= 1;
    }
    result += oneCount * zeroCount;
  }
  return result;
}
// @lc code=end
