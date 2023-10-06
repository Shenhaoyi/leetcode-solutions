/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 0;
    let r = n;
    while (l < r) {
      const m = Math.floor(l + (r - l) / 2);
      if (!isBadVersion(m)) l = m + 1;
      else {
        r = m;
      }
    }
    return l;
  };
};
// @lc code=end
