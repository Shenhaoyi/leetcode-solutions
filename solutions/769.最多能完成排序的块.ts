/*
 * @lc app=leetcode.cn id=769 lang=typescript
 *
 * [769] 最多能完成排序的块
 */

// @lc code=start
function maxChunksToSorted(arr: number[]): number {
  /*
    这种题就是观察规律，找到一个好策略，然后贪心
    策略
      因为是0 ~ n-1
      当前下标之前的数都小于下标，则当前就是一个分割，在当前元素右侧砍断，区间+1
  */
  let result = 0;
  let currentMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(currentMax, arr[i]);
    if (currentMax <= i) {
      result++;
    }
  }

  return result;
}
// @lc code=end
