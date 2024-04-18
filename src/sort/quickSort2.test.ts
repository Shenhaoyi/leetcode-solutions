import { quickSort2 } from './quickSort2';
import { testSortCases } from './testCases';

test('quick sort2 2', () => {
  testSortCases.forEach((list) => {
    const nums = [...list];
    const target = [...list].sort((a, b) => a - b);
    expect(quickSort2(nums)).toEqual(target);
  });
});
