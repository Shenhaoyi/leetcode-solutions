/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function backTrack4(state: number[], choices: number[], target: number, currentIndex: number, result: number[][]) {
  if (target === 0) {
    result.push([...state]);
  } else if (target > 0) {
    for (let i = currentIndex; i < choices.length; i++) {
      const current = choices[i];
      // 尝试当前
      state.push(current);
      backTrack4(state, choices, target - current, i + 1, result); // 元素不能重复，所以下一次从i+1开始
      state.pop();
      while (choices[i] === current) i++; // 将与当前元素相同的情况进行剪枝，因为从第一个该值进行的搜索可以覆盖这种情况，例如从444选可以覆盖从44中选
      i--;
      // 回退
    }
  }
}
function combinationSum2(candidates: number[], target: number): number[][] {
  // 相比39，这里的元素虽然只能选一次，但是会重复出现
  // 例如数字7 1 7为了避免出现选出1 7和7 1这种重复的情形，将数字先排好序
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);
  backTrack4([], candidates, target, 0, result);
  return result;
}
// @lc code=end
