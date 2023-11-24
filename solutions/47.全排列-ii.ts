/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  const { length } = nums;
  const used = Array.from({ length }, () => false); // 在对应位置记录元素是否使用过（因为这里有重复，不能使用对象）
  const backTrack = (state: number[]) => {
    if (state.length === length) {
      result.push([...state]); // 注意要克隆
    }
    const set = new Set();
    for (let i in nums) {
      const current = nums[i];
      // 剪枝：1.避免选中已选的元素；2.避免本轮选择的元素重复
      if (!used[i] && !set.has(current)) {
        // 试探
        used[i] = true;
        state.push(current);
        backTrack(state);
        // 回退
        state.pop();
        used[i] = false;
        // 记录本来已选元素，避免当前节点的子节点选择相同元素
        set.add(current);
      }
    }
  };
  backTrack([]);
  return result;
}
// @lc code=end
