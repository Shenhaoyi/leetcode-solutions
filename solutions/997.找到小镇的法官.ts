/*
 * @lc app=leetcode.cn id=997 lang=typescript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
  // 有向图
  let result = -1;
  const degreeDiff = new Array<number>(n).fill(0); // 入度-出度

  for (const edge of trust) {
    const [from, to] = edge;
    degreeDiff[from - 1] -= 1; // -1 是因为数值是1-n
    degreeDiff[to - 1] += 1;
  }

  let targetCount = 0;
  degreeDiff.forEach((current, index) => {
    // 注意邻居最多n-1
    if (current === n - 1) {
      targetCount += 1;
      result = targetCount === 1 ? index + 1 : -1;
    }
  });
  return result;
}
// @lc code=end
