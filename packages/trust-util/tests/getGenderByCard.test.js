import { getGenderByCard } from '../src';

const idCard = '411424199207067511';//身份证号
const GAIdCard = '810000199408230021';//港澳居民居住证
const TWIdCard = '830000199201300022';//台湾居民居住证

test('身份证号获取性别', () => {
  expect(getGenderByCard(idCard)).toBe('M');
});
test('港澳居民居住证获取性别', () => {
  expect(getGenderByCard(GAIdCard)).toBe('F');
});
test('台湾居民居住证获取性别', () => {
  expect(getGenderByCard(TWIdCard)).toBe('F');
});