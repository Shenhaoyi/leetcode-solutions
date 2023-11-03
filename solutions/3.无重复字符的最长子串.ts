/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// 注意：子串连续，子序列可以不连续
function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  if (s.length < 2) return s.length; // 边界情况

  // 1、双指针（滑动窗口）
  // 思路：只要重复就将左指针右移，知道把重复的元素排除
  // 终止条件，右指针越界
  // 分析：
  // 时间复杂度，O(N)，最多就是2个指针都走到底，走的步骤就算2N
  // 空间复杂度，最坏的情况是O(N)，所有元素都不一样

  let l = 0;
  let r = 0;
  let current = '';
  const list: string[] = [];
  while (r < s.length) {
    current = s[r];
    if (list.indexOf(current) >= 0) {
      // 一直移动左指针，直到没有重复
      l++;
      list.shift();
    } else {
      list.push(current);
      result = Math.max(result, list.length); // 只要没有重复就比较一次
      r++;
    }
  }

  return result;
}
// @lc code=end
