import { quickSort2 } from './quickSort2';

test('quick sort2 1', () => {
  const nums = [5, 4, 3, 2, 1];
  const target = [...nums].sort((a, b) => a - b);
  expect(quickSort2(nums)).toEqual(target);
});

test('quick sort2 2', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 6234, 7, 234];
  const target = [...nums].sort((a, b) => a - b);
  expect(quickSort2(nums)).toEqual(target);
});
