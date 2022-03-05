const reg = /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/;

/**
 * 判断字符串是否是一个手机号
 * @param mobilePhone 需要判断的字符串
 * @returns true or false
 */
function isMobilePhone(mobilePhone: string): boolean {
  return reg.test(mobilePhone);
}

export default isMobilePhone;
