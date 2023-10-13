/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function backTrack2(state: number[], choices: number[], used: boolean[], result: number[][]) {
  if (state.length === choices.length) {
    result.push([...state]); // 注意要克隆
  }
  const set = new Set();
  for (let i in choices) {
    const current = choices[i];
    // 剪枝：1.避免选中已选的元素；2.避免本轮选择的元素重复
    if (!used[i] && !set.has(current)) {
      // 试探
      used[i] = true;
      state.push(current);
      backTrack2(state, choices, used, result);
      // 回退
      state.pop();
      used[i] = false;
      // 避免当前
      set.add(current);
    }
  }
}
function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  const used = new Array(nums.length).fill(false); // 在对应位置记录元素是否使用过（因为这里有重复，不能使用对象）
  backTrack2([], nums, used, result);
  return result;
}
// @lc code=end
