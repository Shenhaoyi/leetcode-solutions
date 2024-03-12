/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  /*
    解法1：暴力求解，每个位置都删除试试
    解法2：双指针，也可以说是贪心
      贪心策略
        遇到不相等了，则直接删除一个
      证明
        如果两个位置相等的时候，你删除其中一个使得最终变成回文字符串，则当前不删，到了内部遇到不相同再删也会变成回文字符串的
          ab...bba => ab...ba
        所以，两个位置相同时删除的情况可以忽略，证毕
  */
  let len = s.length;
  if (len <= 2) return true;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return palindrome(s, left, right - 1) || palindrome(s, left + 1, right);
    }
  }
  return true;
}

// 判断两个是否互为倒序
function palindrome(s: string, left: number, right: number) {
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
// @lc code=end
