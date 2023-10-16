import { unboundedKnapsack } from '.';

test('完全背包', () => {
  const weight = [2, 3, 4, 1]; //物体体积
  const value = [3, 5, 6, 11]; //物体价值
  const bagWeight = 6; //背包最大容纳量
  expect(unboundedKnapsack(weight, value, bagWeight)).toBe(66);
});

test('完全背包 2', () => {
  const weight = [2, 3, 4, 5]; //物体体积
  const value = [3, 6, 8, 10]; //物体价值
  const bagWeight = 7; //背包最大容纳量
  expect(unboundedKnapsack(weight, value, bagWeight)).toBe(14);
});
