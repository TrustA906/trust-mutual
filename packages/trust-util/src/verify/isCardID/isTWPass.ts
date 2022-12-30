/**
 * 台湾居民来往大陆通行证
 * 6至10位字符，支持纯数字或者字母加数字。
    @param {String} value 传入值
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isTWPass = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  return /^[0-9a-zA-Z]{6,10}$/.test(value) && !/^[a-zA-Z]{6,10}$/.test(value);
};
export default isTWPass;
