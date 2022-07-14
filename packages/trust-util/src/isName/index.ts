/**
    姓名校验：姓名可以输入英文(包含空格例如 Li Si) || 中文 (包含· 例如：您好·您好)
    名称是汉字时，汉字中间不能有空格
    名称是汉字时，不能低于两个汉字
    名称是英文字母时，不能低于两个字符
    名称非纯中文、非纯英文时，只支持一种字符类型，允许包含特殊字符'·'
    @param {String} value 传入姓名
    @param {Number | undefined} type 类型 1 校验纯中文名字 2 校验纯英文名字 默认校验中文名字和英文名字
    @return {Boolean} true-校验通过，false-校验不通过
*/
const isName = (value: string | undefined, type: number | undefined): boolean => {
  if (type == 1) {
    return /(^((?![\u3000-\u303F])[\u2E80-\uFE4F]){1}((?![\u3000-\u303F])[\u2E80-\uFE4F\\·]){0,48}((?![\u3000-\u303F])[\u2E80-\uFE4F]){1}$)/.test(
      value,
    );
  } else if (type == 2) {
    return /(^[a-zA-Z]{1}[a-zA-Z\s]{0,48}[a-zA-Z]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\\·]{0,48}[a-zA-Z]{1}$)/.test(
      value,
    );
  }
  return /(^((?![\u3000-\u303F])[\u2E80-\uFE4F]){1}((?![\u3000-\u303F])[\u2E80-\uFE4F\\·]){0,48}((?![\u3000-\u303F])[\u2E80-\uFE4F]){1}$)|(^[a-zA-Z]{1}[a-zA-Z\s]{0,48}[a-zA-Z]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\\·]{0,48}[a-zA-Z]{1}$)/.test(
    value,
  );
};
export default isName;
