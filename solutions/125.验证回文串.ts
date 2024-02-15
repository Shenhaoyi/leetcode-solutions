/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
// @ts-ignore
function isPalindrome(s: string): boolean {
  // 考虑到字符数为单数和双数的情况就行
  const length = s.length;
  if (length <= 1) return true;
  let left = 0;
  let right = length - 1;
  const isLetterOrNumber = (character: string) => {
    if (character.match(/[a-zA-Z0-9]/)) return true;
    return false;
  };
  while (left <= right) {
    if (!isLetterOrNumber(s[left])) {
      left++;
    } else if (!isLetterOrNumber(s[right])) {
      right--;
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}
// @lc code=end
