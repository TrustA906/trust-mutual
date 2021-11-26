/**
  校验邮箱：要包含@和.
  @param {String} value 传入邮箱
  @return {Boolean} true-校验通过，false-校验不通过
  */
const isEmail = (value: string): boolean => {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
};
export default isEmail;
