export const bucketSort = (nums: number[], bucketCount = 5) => {
  let max = -Infinity;
  let min = Infinity;
  nums.forEach((ele) => {
    if (ele > max) max = ele;
    if (ele < min) min = ele;
  });
  // [0, 15]
  // [0,5], (5,10],(10,15]
  const bucketRange = Math.ceil((max - min) / bucketCount); // 每个桶的数值范围，ceil保证所有数值能覆盖到
  const bucketList = Array.from({ length: bucketCount }, () => new Array<number>());

  // 元素入桶
  nums.forEach((ele) => {
    const index = Math.floor((ele - min) / bucketRange); // 得到桶的下标
    bucketList[index].push(ele);
  });

  const result: number[] = [];
  bucketList.forEach((bucket) => {
    bucket.sort((a, b) => a - b); // 桶内排序
    result.push(...bucket);
  });
  return result;
};
