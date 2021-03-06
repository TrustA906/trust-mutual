/**
    英文名字校验规则
    名称是英文字母时，不能低于两个字符
    只支持一种字符类型，允许包含特殊字符'·'
    包含空格例如 Li Si
*/
const EN_RULE =
  /(^[a-zA-Z]{1}[a-zA-Z\s]{0,48}[a-zA-Z]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\\·]{0,48}[a-zA-Z]{1}$)/;

/**
    中文名字校验规则
    名称是汉字时，汉字中间不能有空格
    名称是汉字时，不能低于两个汉字
    中文 (包含· 例如：您好·您好)
*/
const CH_RULE =
  /(^((?![\u3000-\u303F])[\u2E80-\uFE4F]){1}((?![\u3000-\u303F])[\u2E80-\uFE4F\\·]){0,48}((?![\u3000-\u303F])[\u2E80-\uFE4F]){1}$)/;

export { EN_RULE, CH_RULE };
