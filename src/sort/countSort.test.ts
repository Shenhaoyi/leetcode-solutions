import { countSort, countSort2 } from './countSort';

test('bubble sort', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 34, 7, 234];
  const target = [...nums].sort((a, b) => a - b);
  expect(countSort(nums)).toEqual(target);
});

test('bubble sort', () => {
  const nums = [2, 42, 64, 234, 62, 12, 8, 6, 5, 3, 2, 21, 5, 6, 34, 7, 234];
  const target = [...nums].sort((a, b) => a - b);
  expect(countSort2(nums)).toEqual(target);
});
