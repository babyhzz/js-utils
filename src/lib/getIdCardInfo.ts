import isIdCard from "./isIdCard";
import { provinces, cities, areas } from "../data/idCard";

type IdCardInfo = {
  province: string;
  city: string;
  area: string;
  // age: number;
  // gender: "M" | "F";
  // birthday: string;
};

/**
 * 获取当前身份证相关信息
 * @param idCardNo 身份证号
 * @returns
 */
function getIdCardInfo(idCardNo: string): IdCardInfo | false {
  if (!isIdCard(idCardNo)) {
    return false;
  }

  return {
    province: provinces[idCardNo.slice(0, 2)],
    city: cities[idCardNo.slice(0, 4)],
    area: areas[idCardNo.slice(0, 6)],
  };
}

export default getIdCardInfo;
