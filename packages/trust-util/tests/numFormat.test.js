import { numFormat } from '../src';

const a = 1234567894532;//港澳居民居住证
const b = 673439.4542;//台湾居民居住证

test('整数千位分隔', () => {
  expect(numFormat(a)).toBe('1,234,567,894,532');
});
test('小数千位分隔', () => {
  expect(numFormat(b)).toBe('673,439.4542');
});
