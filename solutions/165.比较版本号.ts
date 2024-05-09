/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  // 分割，并将前导 0 去掉，并转为数字
  const list1 = version1.split('.').map((item) => Number(item));
  const list2 = version2.split('.').map((item) => Number(item));
  // 比较所有位
  const maxLength = Math.max(list1.length, list2.length);
  for (let i = 0; i < maxLength; i++) {
    const num1 = list1[i] || 0; // 如果没有这位，则视为 0
    const num2 = list2[i] || 0;
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}
// @lc code=end
