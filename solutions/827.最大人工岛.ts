/*
 * @lc app=leetcode.cn id=827 lang=typescript
 *
 * [827] 最大人工岛
 */

// @lc code=start
/* 
  参考：https://leetcode.cn/problems/number-of-islands/solutions/211211/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
  思路：
  1. dfs 计算岛屿面积，记录岛屿 id-area，然后给当前岛屿的每个格子记录 id
  2. 遍历 grid 中的 0，判断它周围的岛屿即可，每次计算max
*/
function largestIsland(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;
  let result = 0;
  let id = 2;
  const adj = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const dfs = (i: number, j: number, id: number): number => {
    if (i < 0 || j < 0 || i > row - 1 || j > col - 1) return 0;
    const current = grid[i][j];
    if (current === 1) {
      grid[i][j] = id;
      // return 1 + dfs(i, j - 1, id) + dfs(i, j + 1, id) + dfs(i - 1, j, id) + dfs(i, j - 1, id);
      return adj.reduce((prev, curr) => {
        return prev + dfs(i + curr[0], j + curr[1], id);
      }, 1);
    } else return 0;
  };
  const map = new Map<number, number>();
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(i, j, id);
        map.set(id, area);
        id++;
      }
    }
  }

  // 根据相邻岛屿计算人工岛面积，注意去重和边界处理
  const getMaxArea = (i: number, j: number) => {
    const set = new Set<number>();
    adj.forEach((curr) => {
      const id = grid[i + curr[0]]?.[j + curr[1]]; // 注意第一个下标可能就越界了
      if (id) set.add(id);
    });
    const area = [...set].reduce((prev, curr) => {
      return prev + map.get(curr)!;
    }, 1);
    return area;
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) {
        result = Math.max(result, getMaxArea(i, j));
      }
    }
  }
  return result === 0 ? row * col : result; // 判断没有水的情况
}
// @lc code=end
