export function bagProblem(weight: number[], value: number[], bagWeight: number) {
  const { length: n } = weight;
  // dp[i][j]表示i个物品，最大重量为j时的最优值(下标0无用)
  const dp = new Array(n + 1).fill(undefined).map(() => new Array(bagWeight + 1).fill(0));

  // 初始化第一行
  for (let j = 1; j <= bagWeight; j++) {
    const currentWeight = weight[0];
    const currentValue = value[0];
    if (j >= currentWeight) {
      dp[1][j] = currentValue;
    } else {
      dp[1][j] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= bagWeight; j++) {
      const currentWeight = weight[i - 1];
      const currentValue = value[i - 1];
      if (currentWeight <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - currentWeight] + currentValue); // 当前物品放与不放
      } else {
        dp[i][j] = dp[i - 1][j]; // 当前物品放入会超重，不能放
      }
    }
  }
  return dp[n][bagWeight];
}
