/**
 * 护照校验
 * 证件号码中不能有空格，不多于15位字符，支持纯数字或者字母加数字，字母大写
    @param {String} value 传入值
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isPassport = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  return /^[0-9A-Z]{3,15}$/.test(value) && !/^[A-Z]{3,15}$/.test(value);
};
export default isPassport;
