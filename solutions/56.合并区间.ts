/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  /*
    题解：https://leetcode.cn/problems/merge-intervals/solutions/487031/shou-hua-tu-jie-56he-bing-qu-jian-by-xiao_ben_zhu
    思路：先排序，在遍历一一合并
      如果和右边第一个的没有重合，则与右边的任何一个都没有重合，可以直接 push 到 result 中
  */
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    if (prev[1] >= cur[0]) {
      // 有重合
      prev[1] = Math.max(cur[1], prev[1]);
    } else {
      // 不重合，prev推入res数组
      result.push(prev);
      prev = cur; // 更新 prev
    }
  }

  result.push(prev);
  return result;
}
// @lc code=end
