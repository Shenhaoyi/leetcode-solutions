/*
 * @lc app=leetcode.cn id=407 lang=typescript
 *
 * [407] 接雨水 II
 */

// @lc code=start
function trapRainWater(heightMap: number[][]): number {
  const m = heightMap.length;
  const n = heightMap[0].length;

  if (m <= 2 || n <= 2) return 0;

  // Collect heights excluding the outer border
  let heights: number[] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      heights.push(heightMap[i][j]);
    }
  }

  // Find the minimum and the fifth largest value in heights
  heights.sort((a, b) => a - b);
  const min = heights[0]; // todo:最小值的计算不包含最外圈
  const max = heights.length >= 5 ? heights[heights.length - 5] : heights[heights.length - 1];

  const levelCount = (h: number) => {
    let levelWater = 0;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const bfs = (i: number, j: number): number => {
      if (i < 0 || i > m - 1 || j < 0 || j > n - 1) {
        return 0;
      }

      if (!visited[i][j] && heightMap[i][j] < h) {
        visited[i][j] = true;
        return bfs(i - 1, j) + bfs(i, j - 1) + bfs(i + 1, j) + bfs(i, j + 1) + 1;
      } else return 0;
    };

    const markBoundaryConnected = (i: number, j: number) => {
      if (i < 0 || i > m - 1 || j < 0 || j > n - 1) {
        return;
      }
      if (!visited[i][j] && heightMap[i][j] < h) {
        visited[i][j] = true;
        markBoundaryConnected(i - 1, j);
        markBoundaryConnected(i, j - 1);
        markBoundaryConnected(i + 1, j);
        markBoundaryConnected(i, j + 1);
      }
    };

    // Then, calculate the water trapped in bounded regions

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
          markBoundaryConnected(i, j);
        }
      }
    }
    for (let i = 1; i < m - 1; i++) {
      for (let j = 1; j < n - 1; j++) {
        levelWater += bfs(i, j);
      }
    }
    return levelWater;
  };

  let totalWater = 0;
  // let last = 0;
  for (let h = min; h <= max; h++) {
    // if (heights.includes(h)) {
    //   last = levelCount(h);
    // }

    // totalWater += last;
    totalWater += levelCount(h); // 大矩阵超时
  }

  return totalWater;
}
// @lc code=end

