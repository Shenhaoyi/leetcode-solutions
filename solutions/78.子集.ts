/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
/* 
  幂集：由该集合全部子集为元素构成的集合
  题解：https://leetcode.cn/problems/subsets/solutions/420458/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
  思路：就是一颗二叉树的建立，每一层的分叉都是考虑要不要选择当前的元素
  时间复杂度：O(2^N)
  空间复杂度：递归调用栈的代价是 O(N)，state是 O(N)，PowerSet 就可能比较大了
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
