/**
 银行卡校验规则：16 || 17 || 18 || 19位的数字
@param {String} value 传入银行卡号
@return {Boolean} true-校验通过，false-校验不通过
*/
export type cardNo = string;
const isBankCode = (value: cardNo): boolean => {
  return /^([1-9]{1})(\d{15}|\d{16}|\d{17}|\d{18})$/.test(value);
};
export default isBankCode;
