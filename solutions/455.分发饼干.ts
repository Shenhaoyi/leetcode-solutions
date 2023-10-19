/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  // 给一个孩子的饼干应当尽量小并且又能满足该孩子，这样大饼干才能拿来给满足度比较大的孩子。
  // 因为满足度最小的孩子最容易得到满足，所以先满足满足度最小的孩子。
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let result = 0;
  let pointerG = 0;
  let pointerS = 0;
  while (pointerG < g.length && pointerS < s.length) {
    const currentG = g[pointerG];
    const currentS = s[pointerS];
    if (currentG <= currentS) {
      result++;
      pointerG++;
      pointerS++;
    } else {
      pointerS++;
    }
  }
  return result;
}
// @lc code=end
