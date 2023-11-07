/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
/* 
  幂集：由该集合全部子集为元素构成的集合
  题解：https://leetcode.cn/problems/subsets/solutions/420458/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
*/
function subsets(nums: number[]): number[][] {
  const powerSet: number[][] = [];
  const { length } = nums;
  const backTrack = (state: number[], index: number) => {
    // 刚越界
    if (index === length) {
      // 遇到完美二叉树的叶子节点时，推入结果中
      powerSet.push([...state]);
      return;
    }
    // 当前放
    state.push(nums[index]);
    backTrack(state, index + 1);
    state.pop();
    // 当前不放
    backTrack(state, index + 1);
  };
  backTrack([], 0);
  return powerSet;
}
// @lc code=end
