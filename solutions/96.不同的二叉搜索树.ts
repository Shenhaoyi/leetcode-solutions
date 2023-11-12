/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
function numTrees(n: number): number {
  // 动态规划
  // 二叉搜索树，左树 < 根 < 右树
  // 不管根的位置在哪，左边和右边都是连续数字，所以不管是多少，只要连续的数字个数一样，那么能组成的树的个数也一样
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1; // 空树，也算一种情况
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    // i 个数字的子树有 i - 1 个节点。左右子树分 i - 1 个节点
    for (let j = 0; j <= i - 1; j++) {
      // j 为左边个数。root.val 为 j + 1
      dp[i] += dp[i - 1 - j] * dp[j]; // 左子树的种树 * 右子树的种树
    }
  }
  return dp[n];
}
// @lc code=end
