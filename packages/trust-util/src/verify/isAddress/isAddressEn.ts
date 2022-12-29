/**
   校验详细地址-英文：不能低于2个字符，不能包含中文，可支持特殊字符~@#￥&*\/
  @param {String} value 传入详细地址
  @return {Boolean} true-校验通过，false-校验不通过
*/
const isAddress = (value: string | undefined): boolean => {
  return /[a-zA-Z\s][a-zA-Z~@#￥&*/\s]/.test(value);
};
export default isAddress;
