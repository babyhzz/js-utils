const reg = /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/;

function isMobilePhone(phone: string): boolean {
  return reg.test(phone);
}

export default isMobilePhone;
