import { checkCardBirth, checkCardIsLegal } from './rule';
/**
 * 身份证/户口本
 * 18位身份证号。18位字符（18位数字或17位数字+末位X）且字母大写
    @param {String} value 传入值
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isIdCard = (value: string): boolean => {
  if (typeof value !== 'string') return false;
  if (!/^\d{17}(\d|x)$/i.test(value.toUpperCase())) return false; // 不是18位
  const city: { [key: string]: any } = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  };
  if (city[value.slice(0, 2)] === undefined) return false; // 非法地区

  if (!checkCardBirth(value.toUpperCase())) return false; // 非法生日
  if (!checkCardIsLegal(value.toUpperCase())) return false; // 非法证号

  return true;
};
export default isIdCard;
