import { isName, isNameCh, isNameEn } from '../src';

test('姓名校验英文', () => {
  expect(isName('Lucy')).toBe(true);
});
test('姓名校验英文错误', () => {
  expect(isName('Lucy123')).toBe(false);
});
test('姓名校验中文正确', () => {
  expect(isName('您好')).toBe(true);
});
test('姓名校验中文生僻字正确', () => {
  expect(isName('缪㛃龑䶮')).toBe(true);
});
test('姓名校验中文带点字正确', () => {
  expect(isName('您好·您好')).toBe(true);
});
test('姓名校验中文错误', () => {
  expect(isName('您好ddd')).toBe(false);
});
test('姓名校验中文错误中间有空格', () => {
  expect(isName('您 好')).toBe(false);
});

test('姓名校验中文错误中间有2边有空格', () => {
  expect(isName(' 您好 ')).toBe(false);
});
test('姓名校验纯中文正确', () => {
  expect(isNameCh('您好')).toBe(true);
});

test('姓名校验纯中文错误', () => {
  expect(isNameCh('Lucy')).toBe(false);
});

test('姓名校验纯英文正确', () => {
  expect(isNameEn('Lucy')).toBe(true);
});

test('姓名校验纯英文错误', () => {
  expect(isNameEn('您好')).toBe(false);
});
test('姓名校验纯英文错误-null', () => {
  expect(isNameEn(null)).toBe(false);
});
test('姓名校验纯英文错误-undefined', () => {
  expect(isNameEn(undefined)).toBe(false);
});
test('姓名校验纯英文错误-空', () => {
  expect(isNameEn()).toBe(false);
});
test('姓名校验纯英文错误-0', () => {
  expect(isNameEn(0)).toBe(false);
});
