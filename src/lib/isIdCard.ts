import { check15IdCardNo, check18IdCardNo } from './internal/idCard';

/**
 * 检测号码是否是合法身份证号码
 * @param idCardNo 需要校验的身份证号码
 * @returns true or false
 */
function isIdCard(idCardNo: string) {
  const check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
  if (!check) return false;
  if (idCardNo.length === 15) {
    return check15IdCardNo(idCardNo);
  }
  return check18IdCardNo(idCardNo);
}

export default isIdCard;
