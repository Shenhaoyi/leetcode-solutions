/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
// @ts-ignore
function backTrack(state: number[], choices: number[], target: number, currentIndex: number, result: number[][]) {
  if (target === 0) {
    result.push([...state]);
  } else if (target > 0) {
    if (currentIndex > choices.length - 1) return; // 越界（下面的方法在 for 循环中进行限制了）
    const current = choices[currentIndex];
    // 当前位置尝试
    state.push(current);
    backTrack(state, choices, target - current, currentIndex + 1, result); // 元素不能重复，所以下一次从i+1开始
    // 当前位置回退
    state.pop();
    let pointer = currentIndex + 1;
    // 当前元素不选
    while (choices[pointer] === current) pointer++;
    if (pointer < choices.length) backTrack(state, choices, target, pointer, result);
  }
  // 小于就回退
  // else return
}
function combinationSum2(candidates: number[], target: number): number[][] {
  // 相比39，这里的元素虽然只能选一次，但是会重复出现
  // 例如数字7 1 7为了避免出现选出1 7和7 1这种重复的情形，将数字先排好序
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);
  backTrack([], candidates, target, 0, result);
  return result;
}
// @lc code=end

function backTrack4(state: number[], choices: number[], target: number, currentIndex: number, result: number[][]) {
  if (target === 0) {
    result.push([...state]);
  } else if (target > 0) {
    for (let i = currentIndex; i < choices.length; i++) {
      const current = choices[i];
      // 尝试当前
      state.push(current);
      backTrack4(state, choices, target - current, i + 1, result); // 元素不能重复，所以下一次从i+1开始
      // 回退
      state.pop();
      // 下标前进，相当于重复的元素能多选几次已经在本轮处理完了，该元素不能再选了，再选，分支就重复了
      while (choices[i] === current) i++; // 将与当前元素相同的情况进行剪枝，因为从第一个该值进行的搜索可以覆盖这种情况，例如从444选可以覆盖从44中选
      i--; // 因为上面还有一个++；i指向最后一个等于current的数字，下一轮++之后，就不等于current了
    }
  }
}
