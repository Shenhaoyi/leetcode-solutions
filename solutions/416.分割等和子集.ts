/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((curr, prev) => prev + curr, 0);
  if (sum % 2) return false;
  // 1. 回溯，子集，找到子集和等于sum/2，大于就剪枝。经过剪枝时间复杂度略小于2^n
  // 2. 转化为01背包问题，数组的元素同时是weight和value，最大总量为sum/2，如果dp[sum/2] === sum/2，说明存在
  const { length: n } = nums;
  const m = sum / 2;
  const dp = new Array(m + 1).fill(0); // 空间优化，只用一行

  for (let i = 1; i <= n; i++) {
    const current = nums[i - 1];
    // 倒序
    for (let j = m; j >= 1; j--) {
      if (j - current >= 0) {
        dp[j] = Math.max(dp[j], dp[j - current] + current);
      } else {
        dp[j] = dp[j];
      }
    }
  }
  return dp[m] === m;
}
// @lc code=end

function canPartition2(nums: number[]): boolean {
  // 2、记忆化搜索，每个元素选和不选进行分叉，利用记忆和越界进行剪枝
  const sum = nums.reduce((curr, prev) => prev + curr, 0);
  if (sum % 2) return false;
  const target = sum / 2;
  const memo = new Map();

  const dfs = (curSum: number, i: number): boolean => {
    // curSum是当前累加和，i是指针
    if (i == nums.length || curSum > target) {
      // 越界
      return false;
    }
    if (curSum == target) {
      // 递归的出口
      return true;
    }
    const key = curSum + '&' + i; // 描述一个问题的key
    if (memo.has(key)) {
      // 如果memo中有对应的缓存值，直接使用
      return memo.get(key);
    }
    const res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1);
    memo.set(key, res); // 计算的结果存入memo
    return res;
  };

  return dfs(0, 0); // 递归的入口，当前和为0，指针为0
}
