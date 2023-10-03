import { quickSort2 } from './quickSort2';

test('quick sort2 1', () => {
  const nums = [5, 4, 3, 2, 1];
  expect(quickSort2(nums)).toEqual([...nums].sort((a, b) => a - b));
});

test('quick sort2 2', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 6234, 7, 234];
  expect(quickSort2(nums)).toEqual([...nums].sort((a, b) => a - b));
});
