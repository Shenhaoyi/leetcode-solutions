/*
 * @lc app=leetcode.cn id=744 lang=typescript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {
  const { length } = letters;
  if (letters[length - 1] <= target) return letters[0]; // 处理边界情况，即不存在大于target的字符
  let l = 0;
  let r = length - 1;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (letters[m] <= target) l = m + 1;
    else r = m;
  }
  return letters[l];
}
// @lc code=end
