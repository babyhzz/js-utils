import isIdCard from "./isIdCard";
import { provinces, cities, areas } from "./data/idCard";

type Gender = "M" | "F";

type IdCardInfo = {
  province: string;
  city: string;
  area: string;
  gender: Gender;
  birthday: string;
};

function getGender(idCardNo: string): Gender {
  const length = idCardNo.length;
  const genderNum = Number(idCardNo.slice(length - 2, length - 1));

  return genderNum % 2 === 0 ? "F" : "M";
}

/**
 * 获取当前身份证相关信息，仅支持18位身份证号码
 * @param idCardNo 身份证号
 * @returns 当前身份证信息
 */
function getIdCardInfo(idCardNo: string): IdCardInfo | false {
  if (!isIdCard(idCardNo)) {
    return false;
  }

  if (idCardNo.length !== 18) {
    return false;
  }

  return {
    province: provinces[idCardNo.slice(0, 2)],
    city: cities[idCardNo.slice(0, 4)],
    area: areas[idCardNo.slice(0, 6)],
    birthday: idCardNo.slice(6, 14),
    gender: getGender(idCardNo),
  };
}

export default getIdCardInfo;
