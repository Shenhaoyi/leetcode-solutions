/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let result = '';
  const arr1 = num1.split('');
  const arr2 = num2.split('');
  let plusOne = 0;
  // 注意有最高位进位的情况！
  while (arr1.length || arr2.length || plusOne) {
    let i = arr1.pop() || '0';
    let j = arr2.pop() || '0';
    let int = Number(i) + Number(j) + plusOne;
    if (int > 9) {
      plusOne = 1;
      int = int % 10;
    } else {
      plusOne = 0;
    }
    result = String(int) + result;
  }
  return result;
}
// @lc code=end
