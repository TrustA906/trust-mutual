/**
   校验详细地址-中文：详细地址栏不能低于3个汉字7个字符，不可以全为数字。
  @param {String} value 传入详细地址
  @return {Boolean} true-校验通过，false-校验不通过
*/
const isAddressCn = (value: string | undefined): boolean => {
  return /^[\u4e00-\u9fa5\u2E80-\uFE4F]{3,}|[\w\W]{7,}$/.test(value) && !/^[0-9]{7,}$/.test(value);
};
export default isAddressCn;
