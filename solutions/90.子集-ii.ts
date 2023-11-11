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
    // 参考 obsidian://advanced-uri?vault=shen&filepath=%25E9%259D%25A2%25E7%25BB%258F%252F%25E7%25AE%2597%25E6%25B3%2595%25E4%25B8%258E%25E6%2595%25B0%25E6%258D%25AE%25E7%25BB%2593%25E6%259E%2584%252F%25E5%2588%25B7%25E9%25A2%2598%25E8%25AE%25B0%25E5%25BD%2595%252F%25E5%259B%259E%25E6%25BA%25AF%252Fduplicated.excalidraw.md
    // 跳过后面重复的，思路很像 dp 中的一道题 TODO: 看是哪道题
    let pointer = index;
    while (nums[pointer] === current) pointer++;
    if (pointer <= length) backTrack(state, pointer);
  };
  backTrack([], 0);
  return powerSet;
}
// @lc code=end
