/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
const pairObj: Record<string, string> = {
  '(': ')',
  '{': '}',
  '[': ']',
};
/**
 * @description: a和b是否是一对括号
 * @param {string} a
 * @param {string} b
 * @return {*}
 */
const isPair = (a: string, b: string): boolean => {
  return pairObj[a] === b;
};
function isValid(s: string): boolean {
  // 用栈实现，没有配对上就压栈，配对上就出栈
  const stack: string[] = [];
  s.split('').forEach((current) => {
    // 左括号在前，右括号在后！
    if (stack.length > 0 && isPair(stack[stack.length - 1], current)) {
      stack.pop();
    } else {
      stack.push(current);
    }
  });
  return stack.length === 0; // 全都配对则是有效括号
}
// @lc code=end
