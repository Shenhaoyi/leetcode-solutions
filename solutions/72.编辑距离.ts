/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  // i,j表示前i和前j的编辑距离
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  // 初始化-第0列
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i; // 从一个长度为i的字符串变成长度为0的字符串
  }
  // 初始化-第0行
  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j; // 从一个长度为0的字符串变成长度为j的字符串
  }
  for (let i = 1; i < m + 1; i++) {
    const current1 = word1[i - 1];
    for (let j = 1; j < n + 1; j++) {
      const current2 = word2[j - 1];
      if (current1 === current2) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 这里依赖的内容比较多，就偷懒不做空间优化了
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1, // 插入一个
          dp[i - 1][j] + 1, // 删除一个
          dp[i - 1][j - 1] + 1, // 两个不同，替换一个
        );
      }
    }
  }
  return dp[m][n];
}
// @lc code=end
