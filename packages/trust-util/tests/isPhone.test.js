import { isPhone } from '../src';

test('手机号校验', () => {
  expect(isPhone('13241552379')).toBe(true);
});
