import sorted from '../src/sorted.js';

test('sorted', () => {
  expect(sorted([1, 5, 2, -3])).toEqual([-3, 1, 2, 5]);
  expect(sorted([])).toEqual([]);
});