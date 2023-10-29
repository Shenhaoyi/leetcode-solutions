/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
// 取交集，结果中没有重复元素
function intersection(nums1: number[], nums2: number[]): number[] {
  // 思路，使用map记录是否出现
  const map = new Map<number, number>();
  const set = new Set<number>();
  for (let i = 0; i < nums1.length; i++) {
    !map.has(nums1[i]) && map.set(nums1[i], 1);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      set.add(nums2[i]);
    }
  }
  return [...set];
}
// @lc code=end
