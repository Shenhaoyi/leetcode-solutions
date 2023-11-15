/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  // Cnk
  /* 
    思路：与 78.子集一样，建立二叉树，当元素个数与 k 相同时，就是目标组合，保存并剪枝即可。
  */
  const result: number[][] = [];
  function backTrack(state: number[], currentNum: number) {
    if (state.length === k) {
      result.push([...state]);
      return;
    }
    if (currentNum > n) return;
    // 放
    state.push(currentNum);
    backTrack(state, currentNum + 1);
    state.pop();
    // 不放
    backTrack(state, currentNum + 1);
  }
  backTrack([], 1);
  return result;
}
// @lc code=end
