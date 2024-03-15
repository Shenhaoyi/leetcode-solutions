/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  /*
    贪心+二分
    具体见：obsidian://advanced-uri?vault=shen&filepath=zz_%25E6%2589%25BE%25E5%25B7%25A5%25E4%25BD%259C%25E8%25AE%25A1%25E5%2588%2592%252F%25E9%259D%25A2%25E7%25BB%258F%252F%25E7%25AE%2597%25E6%25B3%2595%25E4%25B8%258E%25E6%2595%25B0%25E6%258D%25AE%25E7%25BB%2593%25E6%259E%2584%252F%25E5%2588%25B7%25E9%25A2%2598%25E8%25AE%25B0%25E5%25BD%2595%252F%25E5%258A%25A8%25E6%2580%2581%25E8%25A7%2584%25E5%2588%2592%252F%25E6%259C%2580%25E9%2595%25BF%25E9%2580%2592%25E5%25A2%259E%25E5%25AD%2590%25E5%25BA%258F%25E5%2588%2597.md
  */
  const tails = new Array<number>();
  let result = 0; // 即 tails中最大数的下标+1
  for (const num of nums) {
    let i = 0;
    let j = tails.length;
    // 二分查找，找到 >=num的位置
    while (i < j) {
      const m = Math.floor((i + j) / 2);
      if (tails[m] < num) i = m + 1;
      else j = m;
    }
    if (i === tails.length) {
      // 如果没有找到, 则 num 与长度为 length 的序列可以组成长度为 length+1 的序列
      tails.push(num);
      result = tails.length;
    } else {
      tails[i] = num;
    }
  }
  return result;
}
// @lc code=end

function lengthOfLIS_DP(nums: number[]): number {
  //
  /*
    思考：
      回溯+剪枝：不能满足时间复杂度要求。优化之后就是记忆化搜索，等价于 dp
      DP：状态没法定义，迭代的时候怎么知道当前的数字要不要？
    k 神题解：
      https://leetcode.cn/problems/longest-increasing-subsequence/solutions/24173/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2
      dp[i] 表示【以 nums[i] 为结尾的子序列】的最长长度
      每次 dp[i] 的计算需要遍历所有之前的状态
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
