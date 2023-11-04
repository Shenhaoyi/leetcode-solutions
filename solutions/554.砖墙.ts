/*
 * @lc app=leetcode.cn id=554 lang=typescript
 *
 * [554] 砖墙
 */

// @lc code=start
function leastBricks(wall: number[][]): number {
  // 遍历，记录每一行出现间隔的位置，存入哈希表，间隔出现最多的位置就是结果
  const map = new Map();
  for (let i = 0; i < wall.length; i++) {
    let sum = 0;
    const currentLine = wall[i];
    for (let j = 0; j < currentLine.length - 1; j++) {
      sum += wall[i][j];
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
  }
  let max = 0;
  for (let [key, value] of map.entries()) {
    max = Math.max(value, max);
  }
  return wall.length - max;
}
// @lc code=end
