import { checkCardBirth, checkCardIsLegal } from './rule';
/**
 * 港澳居民居住证
 * 共18位数字，前六位为地区代码，中间八位为出生日期，末4位同身份证校验规则。
 *  香港居民公民身份号码前六位为810000，澳门居民公民身份号码前六位为820000.
    @param {String} value 传入值
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isHKMacaoIdCard = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  if (!/^\d{17}(\d|x)$/i.test(value.toUpperCase())) return false; // 不是18位
  const city: { [key: string]: any } = { 810000: '香港', 820000: '澳门' };
  if (city[value.slice(0, 6)] === undefined) return false; // 非法地区

  if (!checkCardBirth(value.toUpperCase())) return false; // 非法生日
  if (!checkCardIsLegal(value.toUpperCase())) return false; // 非法证号

  return true;
};
export default isHKMacaoIdCard;
