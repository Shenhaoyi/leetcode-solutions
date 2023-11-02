/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  // 每次只比较末位，比较完之后右移一位
  let result = 0;
  while (x !== 0 || y !== 0) {
    if ((x & 1) !== (y & 1)) {
      // 末位不同
      result++;
    }
    // 右移一位
    x = x >>> 1;
    y = y >>> 1;
  }
  return result;
}
// @lc code=end
