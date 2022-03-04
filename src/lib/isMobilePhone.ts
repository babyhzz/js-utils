const reg = /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/;

/**
 * 判断字符串是否是一个手机号
 * @param phone 手机号字符串
 * @returns true or false
 */
function isMobilePhone(phone: string): boolean {
  return reg.test(phone);
}

export default isMobilePhone;
