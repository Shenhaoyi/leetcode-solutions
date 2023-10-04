/**
 * @description: 交换数组的两个元素
 * @param {unknown} array 数组
 * @param {number} i 元素下标
 * @param {number} j 元素下标
 * @return {*}
 */
export const swap = (array: unknown[], i: number, j: number): void => {
  if (i === j || i < 0 || j < 0) return;
  // const temp = array[i];
  // array[i] = array[j];
  // array[j] = temp;
  [array[i], array[j]] = [array[j], array[i]]; // 使用解构赋值
};
