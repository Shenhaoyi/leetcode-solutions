/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  // 回溯，剪枝条件：如果要插入右括号，则当前左括号数量必须大于右括号数量
  const result: string[] = [];
  const backTrack = (state: string, left: number, right: number) => {
    if (left === n && right === n) {
      result.push(state);
    } else if (left > n || right > n) {
      return;
    } else {
      // 试探，尝试加上左/右括号
      if (left > right) {
        // 剪枝
        backTrack(state + ')', left, right + 1);
      }
      backTrack(state + '(', left + 1, right);
      // 回退：因为是字符串，这里不需要进行回退操作
    }
  };
  backTrack('', 0, 0);
  return result;
}
// @lc code=end
