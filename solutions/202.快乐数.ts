/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const help = (n: number) => {
    let sum = 0;
    while (n > 0) {
      const current = n % 10;
      n = (n - current) / 10;
      sum += current * current;
    }
    return sum;
  };
  let slow = n;
  let fast = n;
  while (true) {
    slow = help(slow);
    fast = help(help(fast));
    if (slow === fast) break;
  }
  // 不是归于1，就是进入环
  return slow === 1;
}
// @lc code=end
