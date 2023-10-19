/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  // dp，前i个和前j个的最长公共子序列长度
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // 初始化边界（第0行，第0列）：某一个字符串为空，最长就是0，不用处理

  // 状态转移
  for (let i = 1; i < m + 1; i++) {
    const current1 = text1[i - 1];
    for (let j = 1; j < n + 1; j++) {
      const current2 = text2[j - 1];
      if (current1 === current2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
// @lc code=end
