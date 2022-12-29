/**
 * 港澳居民来往大陆通行证
 * 9至11位字符，第一个字符为字母且只能为“H”或者“M”。
    @param {String} value 传入值
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isHKMacaoPass = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  return /^[H|M][\w\W]{8,10}$/.test(value);
};
export default isHKMacaoPass;
