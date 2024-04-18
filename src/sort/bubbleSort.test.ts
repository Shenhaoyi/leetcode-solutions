import { bubbleSort } from './bubbleSort';
import { testSortCases } from './testCases';

test('bubble sort', () => {
  testSortCases.forEach((list) => {
    const nums = [...list];
    const target = [...list].sort((a, b) => a - b);
    bubbleSort(nums);
    expect(nums).toEqual(target);
  });
});
