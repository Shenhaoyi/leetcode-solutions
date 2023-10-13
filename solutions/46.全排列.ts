/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @description:
 * @param {number} state 当前路径
 * @param {number} choices 所有可选项（保持不变）
 * @param {Record} used 记录节点是否已经经过
 * @param {number} result
 * @return {*}
 */
function backTrack(state: number[], choices: number[], used: Record<string, boolean>, result: number[][]) {
  if (state.length === choices.length) {
    result.push([...state]); // 注意要克隆
  }
  for (let current of choices) {
    // 剪枝
    if (!used[current]) {
      // 试探
      used[current] = true;
      state.push(current);
      backTrack(state, choices, used, result);
      // 回退
      state.pop();
      used[current] = false;
    }
  }
}
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const used = {};
  backTrack([], nums, used, result);
  return result;
}
// @lc code=end
