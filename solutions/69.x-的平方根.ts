/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  let l = 0;
  let r = x;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (m * m < x) l = m + 1;
    else r = m;
  }
  //找到大于等于，判断下是否要-1
  return l * l > x ? l - 1 : l;
}
// @lc code=end
