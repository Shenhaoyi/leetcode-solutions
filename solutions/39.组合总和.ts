/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @description:
 * @param {number} state 当前路径
 * @param {number} choices 所有可选项（保持不变）
 * @param {number} target 当前选择元素的目标值
 * @param {number} currentIndex 可以选择的元素的起始位置
 * @param {number} result
 * @return {*}
 */
function backTrack3(state: number[], choices: number[], target: number, currentIndex: number, result: number[][]) {
  if (target === 0) {
    result.push([...state]);
  } else if (target > 0) {
    // 可选元素下标大于等于当前下标
    for (let i = currentIndex; i < choices.length; i++) {
      const current = choices[i];
      // 当前位置再尝试
      state.push(current);
      backTrack3(state, choices, target - current, i, result);
      //当前位置回退
      state.pop();
    }
  }
  // 小于就回退
  // else return
}

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  backTrack3([], candidates, target, 0, result);
  return result;
}
// @lc code=end
