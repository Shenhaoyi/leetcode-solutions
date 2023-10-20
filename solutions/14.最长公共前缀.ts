/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  // 横向比较，挨个完整对比
  // 纵向比较，每次比1位
  let result = '';
  if (strs.length === 0) return strs[0];
  const first = strs[0];
  let index = 0;
  while (index < first.length) {
    const target = first[index];
    for (let i = 1; i < strs.length; i++) {
      const current = strs[i][index];
      if (current !== target) return result;
    }
    result += target;
    index++;
  }
  return result;
}
// @lc code=end
