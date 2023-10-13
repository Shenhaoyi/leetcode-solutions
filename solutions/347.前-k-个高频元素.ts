/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
// 参考：https://leetcode.cn/problems/top-k-frequent-elements/solutions/279360/javascript-qian-k-ge-gao-pin-yuan-su-by-user7746o/
// 将出现频率作为桶值范围，因为频率是自然数
function topKFrequent(nums: number[], k: number): number[] {
  const result: number[] = [];
  const map = new Map<number, number>();
  for (let current of nums) {
    let count = map.get(current) || 0;
    map.set(current, count + 1);
  }
  // 入桶，因为一个桶只对应一个数字，所以桶内不用排序，因为下标就是要排序的值
  let bucketList: number[][] = [];
  map.forEach((value, key) => {
    // value是出现频率，key是值，数组下标自带排序(频率可能相同，所以一个下表可能有多个数字)
    if (!bucketList[value]) {
      bucketList[value] = [];
    }
    bucketList[value].push(key);
  });
  bucketList = bucketList.filter(Boolean); // 因为已经排好了，可以把空元素过滤掉
  let count = k;
  while (count > 0) {
    const bucket = bucketList.pop() as number[];
    result.push(...bucket);
    count -= bucket.length;
  }
  return result;
}
// @lc code=end
