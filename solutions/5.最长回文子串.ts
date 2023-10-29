/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/* 
  题解：https://leetcode.cn/problems/longest-palindromic-substring/solutions/7792/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/
*/
function longestPalindrome(s: string): string {
  // 3. DP：也是O(N^2)，就偷懒不写了

  // 2、中心扩散法;O(N^2)
  // 要注意区分回文是奇数和偶数的情况
  const length = s.length;
  let resultRange = [0, 0];
  const centerSpread = (l: number, r: number) => {
    while (l > 0 && r < length - 1) {
      if (s[l] === s[r]) {
        l--;
        r++;
      } else {
        break;
      }
    }
    /* 最后一次移动指针导致不相等 */
    if (s[l] !== s[r]) {
      l++;
      r--;
    }
    if (r - l > resultRange[1] - resultRange[0]) {
      resultRange = [l, r];
    }
  };
  for (let i = 0; i < length; i++) {
    centerSpread(i, i); // 奇数
    if (s[i] === s[i + 1]) centerSpread(i, i + 1); // 偶数，自身和右边就行（和左边的话，上一次循环中已经处理了）
  }
  const result = s.slice(resultRange[0], resultRange[1] + 1);
  return result;
}
// @lc code=end

function longestPalindrome1(s: string): string {
  // 1、暴力解法：3层循环;
  // O(N^3)
  const length = s.length;
  let resultRange = [0, 0];
  for (let i = 0; i < length; i++) {
    // 内层循环倒序，这样确保检查区间是从大到小的
    for (let j = length - 1; j >= i + 1; j--) {
      let l = i;
      let r = j;
      while (l < r) {
        if (s[l] !== s[r]) break;
        l++;
        r--;
      }
      // 如果是回文的话，l===r or l===r-1
      if (l >= r) {
        // 比较范围
        if (j - i > resultRange[1] - resultRange[0]) {
          resultRange = [i, j];
        }
        break;
      }
    }
  }
  const result = s.slice(resultRange[0], resultRange[1] + 1);
  return result;
}
