/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
const swap = (array: unknown[], i: number, j: number): void => {
  if (i === j || i < 0 || j < 0) return;
  [array[i], array[j]] = [array[j], array[i]];
};
function reverseVowels(s: string): string {
  const letterList = s.split(''); //转字符数组
  let left = 0;
  let right = letterList.length - 1;
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  while (left < right) {
    if (!set.has(s[left])) {
      left++;
      continue;
    }
    if (!set.has(s[right])) {
      right--;
      continue;
    }
    // 两个都是元音，则交换
    swap(letterList, left, right);
    left++;
    right--;
  }
  return letterList.join('');
}
// @lc code=end
