import { maxCapacity } from './index';

test('maxCapacity', () => {
  expect(maxCapacity([10, 20, 30])).toBe(20);
});

test('maxCapacity 2', () => {
  expect(maxCapacity([10, 2, 4, 9])).toBe(27);
});
