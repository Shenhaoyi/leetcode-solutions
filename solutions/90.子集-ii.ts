/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  // 有重复就先排序
  nums.sort((a, b) => a - b);
  const { length } = nums;
  const powerSet: number[][] = [];
  const backTrack = (state: number[], index: number) => {
    // 越界
    if (index === length) {
      powerSet.push([...state]);
      return;
    }
    const current = nums[index];
    state.push(current);
    backTrack(state, index + 1);
    state.pop();
    // 跳过后面重复的，思路很像 dp 中的一道题 TODO: 看是哪道题
    let pointer = index;
    while (nums[pointer] === current) pointer++;
    if (pointer <= length) backTrack(state, pointer);
  };
  backTrack([], 0);
  return powerSet;
}
// @lc code=end
