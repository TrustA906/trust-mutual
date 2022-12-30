import isBornCertificatePass from './isBornCertificatePass';
import isForeigner from './isForeigner';
import isHKMacaoIdCard from './isHKMacaoIdCard';
import isHKMacaoPass from './isHKMacaoPass';
import isIdCard from './isIdCard';
import isPassport from './isPassport';
import isTWIdCard from './isTWIdCard';
import isTWPass from './isTWPass';
/**
 * 所有证件校验规则
    @param {String} value 输入参数证件类型
    @return {function}     [返回值]校验方法
*/
const isAll = (value: string) => {
  switch (value) {
    case '1': //身份证
      return isIdCard;
    case '7': //户口本
      return isIdCard;
    case '3': //护照
      return isPassport;
    case '4': //出生证明
      return isBornCertificatePass;
    case '11': //港澳居民来往大陆通行证
      return isHKMacaoPass;
    case '12': //台湾居民来往大陆通行证
      return isTWPass;
    case '15': //香港居民/澳门居民居住证
      return isHKMacaoIdCard;
    case '16': //台湾居民民居住证
      return isTWIdCard;
    case '18': //外国人永久居留证
      return isForeigner;
    default:
      return isIdCard;
  }
};
export default isAll;
