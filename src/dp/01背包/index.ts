export function bagProblem(weight: number[], value: number[], bagWeight: number) {
  const { length: n } = weight;
  // dp[i][j]表示i个物品，最大重量为j时的最优值(下标0无用)
  // 这里已经初始化，第0列表示无空间，则能放的value为0；第0行表示没有物品，能放的value也为0；所以其实第1行不需要初始化，
  const dp = new Array(n + 1).fill(undefined).map(() => new Array(bagWeight + 1).fill(0));

  for (let i = 1; i <= n; i++) {
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

// 空间优化版：因为只依赖上一行的数据，所以一行数组够用了，但是可能依赖上一行左边任意位置的值，所以采用倒序遍历
export function bagProblem2(weight: number[], value: number[], bagWeight: number) {
  const { length: n } = weight;
  // dp[i][j]表示i个物品，最大重量为j时的最优值(下标0无用)
  const dp = new Array(bagWeight + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = bagWeight; j >= 1; j--) {
      const currentWeight = weight[i - 1];
      const currentValue = value[i - 1];
      if (currentWeight <= j) {
        dp[j] = Math.max(dp[j], dp[j - currentWeight] + currentValue); // 当前物品放与不放
      } else {
        dp[j] = dp[j]; // 当前物品放入会超重，不能放
      }
    }
  }
  return dp[bagWeight];
}
