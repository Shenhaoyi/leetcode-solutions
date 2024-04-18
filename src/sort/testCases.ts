// 正常情况下的随机数组
const randomArray = [5, 2, 7, 1, 9, 3, 6, 4, 8];

// 包含重复元素的数组
const arrayWithDuplicates = [5, 2, 7, 1, 9, 3, 6, 4, 8, 5, 3, 2, 1];

// 已排序的数组
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 逆序排列的数组
const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// 空数组
const emptyArray: number[] = [];

// 只包含一个元素的数组
const singleElementArray = [42];

// my case
const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 6234, 7, 234];

// 大量元素的数组（性能测试）
const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

export const testSortCases = [
  randomArray,
  arrayWithDuplicates,
  sortedArray,
  reversedArray,
  emptyArray,
  singleElementArray,
  largeArray,
  nums,
];
