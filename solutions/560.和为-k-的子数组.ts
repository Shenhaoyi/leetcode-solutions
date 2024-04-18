/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
// 子数组:连续的非空序列
/*
  参考题解：https://leetcode.cn/problems/subarray-sum-equals-k/solutions/247991/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/
*/
function subarraySum(nums: number[], k: number): number {
  // 1、双层循环
  // 2、【x】双指针，不行，数字可以是负数，累加不是单调递增的，根本不知道指针如何移动
  // 3、前缀和
  let result = 0;
  const map = new Map<number, number>();
  let prefixSum = 0;
  map.set(result, 1);
  for (let num of nums) {
    prefixSum += num;
    const target = prefixSum - k;
    result = result + (map.get(target) || 0);
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return result;
}
// @lc code=end
