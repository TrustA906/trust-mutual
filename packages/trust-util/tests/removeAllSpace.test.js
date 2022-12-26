import { removeAllSpace } from '../src';

const str = ' 6 6 ';//字符串

test('去除字符串中的空格', () => {
  expect(removeAllSpace(str)).toBe('66');
});