/**
  校验手机号：1打头11位数字，只能一个人使用，系统要校验。投保人手机号必录。
  @param {String} value 传入号码
  @return {Boolean} true-校验通过，false-校验不通过
  */
const isPhone = (value: string | undefined): boolean => {
  return /^1\d{10}$/.test(value);
};
export default isPhone;
