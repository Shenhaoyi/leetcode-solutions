// 桶排序的特例，只能适用于自然数（即非负整数）的排序
// 1、用数组下标来表示出现的数字，value为出现的次数
export const countSort = (nums: number[]) => {
  if (nums.length < 2) return;
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (arr[current]) {
      arr[current] += 1;
    } else {
      arr[current] = 1;
    }
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const count = arr[i];
    if (count) {
      for (let j = 0; j < count; j++) {
        result.push(i);
      }
    }
  }
  return result;
};

// 2、用哈希表
export const countSort2 = (nums: number[]) => {
  if (nums.length < 2) return;
  const map = new Map();
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map.has(current)) {
      map.set(current, map.get(current) + 1);
    } else {
      map.set(current, 1);
    }
    if (current > max) max = current;
    if (current < min) min = current;
  }
  const result = [];
  for (let i = min; i <= max; i++) {
    const count = map.get(i);
    if (count) {
      for (let j = 0; j < count; j++) {
        result.push(i);
      }
    }
  }
  return result;
};
