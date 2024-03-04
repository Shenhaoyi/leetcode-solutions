/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  /*
    解法：倒序双指针：不用担心会有覆盖问题，因为 0 的个数等于 n
    参考：https://leetcode.cn/problems/merge-sorted-array/solutions/666608/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0
  */
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let currentIndex = n + m - 1;

  while (pointer1 >= 0 || pointer2 >= 0) {
    let current = 0;
    // 越界处理
    if (pointer1 < 0) {
      current = nums2[pointer2--];
    } else if (pointer2 < 0) {
      current = nums1[pointer1--];
    } else {
      const current1 = nums1[pointer1];
      const current2 = nums2[pointer2];
      if (current1 < current2) {
        current = current2;
        pointer2--;
      } else {
        current = current1;
        pointer1--;
      }
    }
    nums1[currentIndex--] = current;
  }
}
// @lc code=end
