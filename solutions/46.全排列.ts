/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const { length } = nums;
  const used = Array.from({ length }, () => false); // 记录节点是否已经经过，用下标对应
  const backTrack = (state: number[]) => {
    if (state.length === length) {
      result.push([...state]); // 注意要克隆
      return;
    }
    for (let i in nums) {
      // 剪枝
      if (!used[i]) {
        // 试探
        used[i] = true;
        state.push(nums[i]);
        backTrack(state);
        // 回退
        state.pop();
        used[i] = false;
      }
    }
  };
  backTrack([]);
  return result;
}
// @lc code=end
