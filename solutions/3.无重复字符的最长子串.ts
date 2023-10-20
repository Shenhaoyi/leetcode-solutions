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

  // 解决方法及其时间空间复杂度
  // 1、双指针（滑动窗口），区间内的元素数量等于 set 元素的数量，则符合要求
  // 循环：
  // 右指针开始出现重复的情况时：结果比较；左指针移动到前面的重复元素的右边
  // 没有重复：add 到 set 中，右指针继续移动
  // 终止条件，右指针越界
  // 分析：
  // 时间复杂度，O(N)，最多就是2个指针都走到底，走的步骤就算2N
  // 空间复杂度，最坏的情况是O(N)，所有元素都不一样

  let l = 0;
  let r = 0;
  let current = '';
  const set = new Set(); // 改用Map也行，可以保存下标
  while (r < s.length) {
    current = s[r];

    // 遇到重复的，左指针移动到没有重复为止
    if (set.has(current)) {
      while (s[l] !== current) {
        set.delete(s[l]);
        l++;
      }
      // 找到等于current的第一个，再往右移动一位
      set.delete(current);
      l++;
    }

    // 右指针位置的字符加入set
    set.add(current);
    // 此时l~r已经没有重复的了
    result = Math.max(result, set.size);

    r++;
  }

  return result;
}
// @lc code=end
