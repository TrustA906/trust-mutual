/**
 判断证件的出生日期
@param {String} UUserCard 传入证件号码
@return {Boolean} true-校验通过，false-校验不通过
@author keely
*/
const checkCardBirth = (UUserCard: string) => {
  const birthday =
    UUserCard.substr(6, 4) +
    '/' +
    Number(UUserCard.substr(10, 2)) +
    '/' +
    Number(UUserCard.substr(12, 2));
  const d = new Date(birthday);
  const newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate());
  const currentTime = new Date().getTime();
  const time = d.getTime();
  if (time >= currentTime || birthday !== newBirthday) return false; // 非法生日
  return true;
};
/**
 判断证件是否合法
@param {String} UUserCard 传入证件号码
@return {Boolean} true-校验通过，false-校验不通过
@author keely
*/
const checkCardIsLegal = (UUserCard: string) => {
  const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += +UUserCard.substr(i, 1) * arrInt[i];
  }
  const residue = arrCh[sum % 11];
  if (residue !== UUserCard.substr(17, 1)) return false; // 非法证号
  return true;
};
export { checkCardBirth, checkCardIsLegal };
