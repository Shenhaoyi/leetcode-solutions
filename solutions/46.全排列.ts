/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const { length } = nums;
  const used: Record<string, boolean> = {}; // 记录节点是否已经经过
  const backTrack = (state: number[]) => {
    if (state.length === length) {
      result.push([...state]); // 注意要克隆
      return;
    }
    for (let current of nums) {
      if (used[current]) continue; // 剪枝
      // 试探
      used[current] = true;
      state.push(current);
      backTrack(state);
      // 回退
      state.pop();
      used[current] = false;
    }
  };
  backTrack([]);
  return result;
}
// @lc code=end
