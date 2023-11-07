/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  const length = s.length;
  const backTrack = (state: string[], choicesIndex: number) => {
    // 边界处理，越界一起处理
    if (state.length >= 4 || choicesIndex >= length) {
      if (state.length === 4 && choicesIndex === length) {
        result.push(state.join('.'));
      }
      return;
    }
    // 遍历当前选项：从choicesIndex，每轮的字符数可以有 1-3 个
    // 注意：i 为切的右边界，所以范围是从 1~length
    for (let i = choicesIndex + 1; i <= length && i - choicesIndex <= 3; i++) {
      const current = s.slice(choicesIndex, i);
      // 剪枝 1：不能有前导 0
      if (current[0] === '0' && current.length > 1) break;
      // 剪枝 2：数值判断
      if (Number(current) <= 255) {
        // 尝试
        state.push(current);
        backTrack(state, i);
        // 回退
        state.pop();
      }
    }
  };
  backTrack([], 0);
  return result;
}
// @lc code=end
