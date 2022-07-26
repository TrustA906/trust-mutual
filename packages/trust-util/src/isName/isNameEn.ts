import { EN_RULE } from './rule';
/**
 * 英文名字校验
    @param {String} value 传入姓名
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isNameEn = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  return EN_RULE.test(value);
};
export default isNameEn;
