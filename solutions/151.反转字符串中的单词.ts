/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start

function reverseWords(s: string): string {
  // 思路，连续的字符就添加到list中，空格跳过
  const list: string[] = [];
  let pointer = 0;
  let currentWord = '';
  while (pointer < s.length) {
    const currentLetter = s[pointer];
    if (currentLetter !== ' ') {
      currentWord += currentLetter;
    } else {
      // 遇到空格了
      if (currentWord) {
        list.unshift(currentWord);
        currentWord = '';
      }
    }
    pointer++;
  }
  // 注意跳出循环的时候，如果结尾不是空格，则最后一个单词因为没有触发条件而没有入list
  if (currentWord) {
    list.unshift(currentWord);
    currentWord = '';
  }
  return list.join(' ');
}
// @lc code=end

// 利用字符串方法
function trim(s: string) {
  return s.replace(/^\s+|\s+$/g, '');
}
function reverseWords2(s: string): string {
  const list = s.split(' ');
  return list
    .map((item) => trim(item))
    .filter(Boolean)
    .reverse()
    .join(' ');
}
