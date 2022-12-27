import { getBirthByCard } from '../src';

const idCard = '411424199207067511';//身份证号
const GAIdCard = '810000199408230021';//港澳居民居住证
const TWIdCard = '830000199201300022';//台湾居民居住证

test('身份证号获取生日', () => {
  expect(getBirthByCard(idCard)).toBe('1992-07-06');
});
test('港澳居民居住证获取生日', () => {
  expect(getBirthByCard(GAIdCard)).toBe('1994-08-23');
});
test('台湾居民居住证获取生日', () => {
  expect(getBirthByCard(TWIdCard)).toBe('1992-01-30');
});