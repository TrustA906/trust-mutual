import { getAgeByBirth } from '../src';

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
month = (month > 9) ? month : ("0" + month);
day = (day < 10) ? ("0" + day) : day;
let today = year + "-" + month + "-" + day;

test('根据出生日期获取年龄', () => {
  expect(getAgeByBirth(today)).toBe(0);
});