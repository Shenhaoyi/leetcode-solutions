import { bagProblem } from '.';

test('01背包', () => {
  const weight = [2, 3, 4]; //物体体积
  const value = [3, 5, 6]; //物体价值
  const bagWeight = 6; //背包最大容纳量
  expect(bagProblem(weight, value, bagWeight)).toBe(9);
});

test('01背包 2', () => {
  const weight = [2, 3, 4, 1]; //物体体积
  const value = [3, 5, 6, 11]; //物体价值
  const bagWeight = 6; //背包最大容纳量
  expect(bagProblem(weight, value, bagWeight)).toBe(19);
});
