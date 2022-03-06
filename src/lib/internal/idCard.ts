import { provinces, cities, areas } from "../data/idCard";

// 位权重
const powers: string[] = [
  "7",
  "9",
  "10",
  "5",
  "8",
  "4",
  "2",
  "1",
  "6",
  "3",
  "7",
  "9",
  "10",
  "5",
  "8",
  "4",
  "2",
];

// 校验位
const parityBit: string[] = [
  "1",
  "0",
  "X",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

// 获取校验位
const getParityBit = (idCardNo: string) => {
  let id17 = idCardNo.substring(0, 17);

  let power = 0;
  for (let i = 0; i < 17; i++) {
    power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
  }

  let mod = power % 11;
  return parityBit[mod];
};

const checkAddressCode = (addressCode: string) =>
  Object.keys(provinces).includes(addressCode);

const checkBirthDayCode = (birDayCode: string) => {
  const yyyy = parseInt(birDayCode.substring(0, 4), 10);
  const mm = parseInt(birDayCode.substring(4, 6), 10);
  const dd = parseInt(birDayCode.substring(6), 10);
  const date = new Date(yyyy, mm - 1, dd);
  // Date 可直接进行比较，会先调用其 valueOf 方法
  if (date > new Date()) {
    return false;
  } else if (
    date.getFullYear() === yyyy &&
    date.getMonth() === mm - 1 &&
    date.getDate() === dd
  ) {
    return true;
  }
  return false;
};

// 18位身份证校验位检查
const checkParityBit = (idCardNo: string) =>
  getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();

// 15位身份证检查
const check15IdCardNo = (idCardNo: string) => {
  let check =
    /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(
      idCardNo
    );
  if (!check) return false;
  let addressCode = idCardNo.substring(0, 2);
  check = checkAddressCode(addressCode);
  if (!check) return false;
  let birDayCode = `19${idCardNo.substring(6, 12)}`;
  check = checkBirthDayCode(birDayCode);
  if (!check) return false;
  return true;
};

// 18位身份证检查
const check18IdCardNo = (idCardNo: string) => {
  let check =
    /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(
      idCardNo
    );
  if (!check) return false;
  let addressCode = idCardNo.substring(0, 2);
  check = checkAddressCode(addressCode);
  if (!check) return false;
  let birDayCode = idCardNo.substring(6, 14);
  check = checkBirthDayCode(birDayCode);
  if (!check) return false;
  return checkParityBit(idCardNo);
};

export { check15IdCardNo, check18IdCardNo, getParityBit };
