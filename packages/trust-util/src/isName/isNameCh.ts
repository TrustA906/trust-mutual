import { CH_RULE } from './rule';
/**
 * 中文名字校验
    @param {String} value 传入姓名
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isNameCh = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  return CH_RULE.test(value);
};
export default isNameCh;
