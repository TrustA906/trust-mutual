/**
 * 外国人永久居留证
 * 最少15个字符，支持最多30个字符且首位必须为大写英文字母
    @param {String} value 传入值
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isForeigner = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  return /^([A-Z]{1}\w{14,29})$/.test(value);
};
export default isForeigner;
