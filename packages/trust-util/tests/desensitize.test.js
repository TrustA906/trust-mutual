import { desensitize } from '../src';

let str = '1234567890'

test('字符串脱敏', () => {
  expect(desensitize(str, 2,2)).toBe('12******90');
});