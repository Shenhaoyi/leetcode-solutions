/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  //
  /*
    思考：
      回溯+剪枝：不能满足时间复杂度要求。优化之后就是记忆化搜索，等价于 dp
      DP：状态没法定义，迭代的时候怎么知道当前的数字要不要？
    k 神题解：
      https://leetcode.cn/problems/longest-increasing-subsequence/solutions/24173/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2
      dp[i] 表示【以 nums[i] 为结尾的子序列】的最长长度
      每次 dp[i] 的计算需要遍历所有之前的状态
    贪心+二分看得头疼，后面有空再研究
  */
  const { length } = nums;
  const dp = Array.from({ length }, () => 0);
  dp[0] = 1;
  for (let i = 1; i < length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
}
// @lc code=end
