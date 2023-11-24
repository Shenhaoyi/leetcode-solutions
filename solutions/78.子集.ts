/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
/* 
  幂集：由该集合全部子集为元素构成的集合
  题解：https://leetcode.cn/problems/subsets/solutions/420458/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
  思路：就是一颗二叉树的建（先序遍历的顺序），每一层的分叉都是考虑要不要选择当前的元素
  时间复杂度：O(2^N)
  空间复杂度：递归调用栈的代价是 O(N)，state是 O(N)，PowerSet 就可能比较大了
*/
function subsets(nums: number[]): number[][] {
  const powerSet: number[][] = [];
  const { length } = nums;
  const backTrack = (state: number[], index: number) => {
    // 刚越界（length - 1的时候还要判断是否选呢！）
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

// 方法 2：更优，但是不好记
function subsets2(nums: number[]): number[][] {
  const powerSet: number[][] = [];
  const { length } = nums;
  const backTrack = (state: number[], index: number) => {
    powerSet.push([...state]); // 因为每次必放，所以每个节点都是一种子集
    // index 会在for 循环中被限制住，所以不会越界
    for (let i = index; i < length; i++) {
      const current = nums[i];
      // 当前放
      state.push(current);
      backTrack(state, i + 1); // 注意是 i 而不是 index
      state.pop();
      // 注意，必须放，所以没有了不放的代码
    }
  };
  backTrack([], 0);
  return powerSet;
}
