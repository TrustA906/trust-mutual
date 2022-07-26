import { EN_RULE, CH_RULE } from './rule';
/**
 * 中文 || 英文 ，名字校验
    @param {String} value 传入姓名
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isName = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  return EN_RULE.test(value) || CH_RULE.test(value);
};
export default isName;
