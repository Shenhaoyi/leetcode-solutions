// 与01背包的区别是，每个物品能选择多次
// 差别就在状态转移方程，上一次可以和当前这一次选择同一个物品
export function unboundedKnapsack(weight: number[], value: number[], bagWeight: number) {
  const { length: n } = weight;
  // dp[i][j]表示i个物品，最大重量为j时的最优值(下标0无用)
  const dp = new Array(bagWeight + 1).fill(0); // 空间优化版

  // 初始化第一行
  for (let j = 1; j <= bagWeight; j++) {
    const currentWeight = weight[0];
    const currentValue = value[0];
    if (j >= currentWeight) {
      dp[j] = dp[j - currentWeight] + currentValue; // 注意这里，多出来的空间还能让当前物品再放！
    } else {
      dp[j] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= bagWeight; j++) {
      // 必须正序
      const currentWeight = weight[i - 1]; // 记得下标要-1！
      const currentValue = value[i - 1];
      if (j - currentWeight >= 0) {
        dp[j] = Math.max(dp[j], dp[j - currentWeight] + currentValue); // 上面和左边的比较，左边能直接包含左边上面的情况，比01背包的结果肯定更好
      } else {
        dp[j] = dp[j]; // 当前超重，不能选了
      }
    }
  }

  return dp[bagWeight];
}
